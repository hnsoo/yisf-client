import AuthService from "./auth";
import RequestService from "./request"

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
                    .then((res) => RequestService.checkError(res))
                    .then((result) => RequestService.retResult(result))
                    .catch((err) => RequestService.handleError(err))
            )
            .catch(() =>
                Promise.reject()
            );
    }
}

export default new UserService();