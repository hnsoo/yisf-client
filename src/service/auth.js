import {getCookie, setCookie, removeCookie} from "./cookie";

const API_URL = "http://15.165.86.75:8080/api/v1"

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
                const expires = new Date(result.tokenExpired)
                console.log(result)
                localStorage.setItem('token', result.token);
                localStorage.setItem('tokenExpired', result.tokenExpired);
                setCookie('refresh', result.refresh, {
                    path: "/",
                    expires,
                    // httpOnly: true,
                });
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
    checkSession() {
        let expires = new Date(localStorage.getItem("tokenExpired"));
        let now = new Date();

        // 토큰 유효기간을 지났을 경우
        if (expires < now) {
            // 토큰 재발행 함수 실행
        }
    }
}

export default new AuthService();