import AuthService from "../service/auth";
import RequestService from "./request";

const API_URL = "http://15.165.86.75:8080/api/v1/problem"

class ProblemService {
    problemList(field) {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + "/" + field, {
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
    sendFlag(problemId, flag) {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + "/" + problemId, {
                    method: 'POST',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: new URLSearchParams({
                        flag: flag,
                    })
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

export default new ProblemService()