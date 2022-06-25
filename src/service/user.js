import AuthService from "./auth";

const API_URL = "http://15.165.86.75:8080/api/v1"

class UserService {
    loadMyInfo() {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + '/account', {
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
                })
                    .then((res) => res.json())
                    .then((result) => {
                        if(result.errorCode) throw new Error(result);
                        return result;
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch(() =>
                Promise.reject()
            );
    }
}

export default new UserService();