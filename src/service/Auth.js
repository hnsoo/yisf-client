import {getCookie, setCookie} from "./cookie";

const API_URL = "http://15.165.86.75:8080/api/v1"

class AuthService {
    login(id, password) {
        fetch(API_URL + '/login' + '?username=asd123&password=asd123123asd', {
            method: "POST",
            body: JSON.stringify({
                    username: id,
                    password: password,
                })
        })
            .then((res) => res.json())
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
            }
            )
            .catch((err) => console.log(err));
    }
}

export default new AuthService();