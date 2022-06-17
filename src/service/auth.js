import {getCookie, setCookie, removeCookie} from "./cookie";
import RequestService from "./request";

const API_URL = "http://15.165.86.75:8080/api/v1"

function setAuth(token, tokenExpired, refresh) {
    const expires = new Date(tokenExpired)
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
            .then((res) => RequestService.checkError(res))
            .then((result) => {
                setAuth(result.token, result.tokenExpired, result.refresh);
                return RequestService.retResult(result)
            })
            .catch((err) => RequestService.handleError(err))
    }
    logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("tokenExpired")
        removeCookie("refresh")
    }
    reissue() {
        return fetch(API_URL + '/reissue', {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem("token"),
                REFRESH: getCookie("refresh"),
            }
        })
            .then((res) => RequestService.checkError(res))
            .then((result) => RequestService.retResult(result))
            .catch((err) => RequestService.handleError(err))
    }
    checkSession() {
        let expires = new Date(localStorage.getItem("tokenExpired"));
        let now = new Date();

        // 토큰 유효기간을 지났을 경우
        if (expires < now.setMinutes(now.getMinutes()+15)) {
            // 토큰 재발행 함수 실행
            return this.reissue()
                .then(() => {
                    return Promise.resolve();
                })
                .catch(() => {
                    return Promise.reject();
                })
        }
        return Promise.resolve();
    }
}

export default new AuthService();