import {getCookie, setCookie, removeCookie} from "./cookie";

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
            .then ((res) => {
                // reponse가 ok가 아닐 때
                console.log(res)
                if (!res.ok) {
                    console.log(res.json())
                    throw new Error('400 or 500 에러 발생')
                }
                return res.json()
            })
            .then((result) => {
                if(result.errorCode){
                    throw new Error(result.detail)
                }
                console.log(result)
                setAuth(result.token, result.tokenExpired, result.refresh);
                return result;
            }
            )
            .catch((err) => {
                console.log(err)
                return Promise.reject();
            });
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
            .then ((res) => {
            // reponse가 ok가 아닐 때
                console.log(res)
                if (!res.ok) {
                    console.log(res.json())
                    throw new Error('400 or 500 에러 발생')
                }
                return res.json()
        })
            .then((result) => {
                if(result.errorCode){
                    throw new Error(result.detail)
                }
                console.log(result)
                setAuth(result.token, result.tokenExpired, result.refresh);
                return result;
                }
            )
            .catch((err) => {
                console.log(err)
                return Promise.reject();
            });
    }
    checkSession() {
        let expires = new Date(localStorage.getItem("tokenExpired"));
        let now = new Date();

        // 토큰 유효기간을 지났을 경우
        if (expires < now.setMinutes(now.getMinutes()+10)) {
            // 토큰 재발행 함수 실행
            this.reissue()
                .then()
                .catch()
        }
    }
}

export default new AuthService();