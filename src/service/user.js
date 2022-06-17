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
                    .then((res) => {
                        // reponse가 ok가 아닐 때
                        console.log(res)
                        if (!res.ok) {
                            console.log(res.json())
                            throw new Error('400 or 500 에러 발생')
                        }
                        return res.json()
                    })
                    .then((result) => {
                            // if(result.errorCode){
                            //     throw new Error(result.detail)
                            // }
                            console.log(result)
                            return result;
                        }
                    )
                    .catch((err) => {
                        console.log(err)
                        return Promise.reject();
                    })
            )
            .catch(() =>
                Promise.reject()
            );
    }
}

export default new UserService();