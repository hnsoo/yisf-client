import {getCookie, setCookie, delCookie} from "./cookie";

const API_URL = "http://211.229.232.100:8080/api/v1"

function setAuth(token, tokenExpired, refresh) {
    const expires = new Date()
    expires.setHours(expires.getHours() + 24)
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpired', tokenExpired);
    setCookie('refresh', refresh, {
        path: "/",
        expires,
        // httpOnly: true,
    });
}

class AuthService {
    login(id, password) {
        return fetch(API_URL + '/login', {
            method: 'POST',
            body: new URLSearchParams({
                    username: id,
                    password: password,
                })
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.errorCode) throw new Error(result);
                setAuth(result.token, result.tokenExpired, result.refresh);
                return result;
            })
            .catch((err) => Promise.reject(err))
    }
    logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("tokenExpired")
        delCookie("refresh")
        fetch(API_URL + '/logout', {
            method: 'GET',
        })
    }
    reissue() {
        return fetch(API_URL + '/reissue', {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem("token"),
                REFRESH: getCookie("refresh"),
            }
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.errorCode) throw new Error(result);
                setAuth(result.token, result.tokenExpired, result.refresh);
                return result;
            })
            .catch((err) => Promise.reject(err))
    }
    checkSession() {
        console.log("checkSession called")
        // 세 개의 토근중 하나라도 없으면 접근 거부
        if(!(localStorage.getItem("token") && localStorage.getItem("tokenExpired")
        && getCookie("refresh")))
            return Promise.reject();

        let expires = new Date(localStorage.getItem("tokenExpired").replace("KST", ""));
        let now = new Date();

        // 토큰 유효기간을 지났을 경우
        if (expires < now.setMinutes(now.getMinutes()+15)) {
            // 토큰 재발행 함수 실행
            return this.reissue()
                .then(() => {
                    return Promise.resolve();
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
        }
        return Promise.resolve();
    }
}

export default new AuthService();