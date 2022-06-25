import AuthService from "../service/auth";

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
                    .then((res) => res.json())
                    .then((result) => {
                        if(result.errorCode) throw new Error(result);
                        return result;
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
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
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(res.errorCode)
                        }
                        return Promise.resolve()
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
            );
    }
}

export default new ProblemService()