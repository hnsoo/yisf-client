import {getCookie, setCookie} from "./cookie";

const API_URL = "http://15.165.86.75:8080/api/v1"

class AuthService {
    login(id, password) {
        return fetch(API_URL + '/login' + '?username=asd123&password=asd123123asd', {
            method: "POST",
            body: JSON.stringify({
                    username: id,
                    password: password,
                })
        })
            .then ((res) => {
                // reponse가 ok가 아닐 때
                if (!res.ok) {
                    throw new Error('400 or 500 에러 발생')
                }
                return res.json()
            })
            .then((result) => {
                const expires = new Date(result.tokenExpired)
                console.log(expires, result.tokenExpired)
                localStorage.setItem('token', result.token);
                localStorage.setItem('tokenExpired', result.tokenExpired);
                setCookie('refresh', result.refresh, {
                    path: "/",
                    expires,
                    // httpOnly: true,
                });
                console.log(getCookie('refresh'))
                return result;
            }
            )
            .catch((err) => {
                console.log(err)
                return Promise.reject();
            });
    }
}

export default new AuthService();