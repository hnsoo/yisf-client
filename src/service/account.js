import AuthService from "./auth";

const API_URL = "http://211.229.232.100:8080/api/v1"

class AccountService {
    getMyInfo() {
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
                        if(result.errorCode || result.error) throw new Error(result);
                        return result;
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
            );
    }
    changePw(oldPassword, newPassword) {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + '/account/pw', {
                    method: 'PUT',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: new URLSearchParams({
                        oldPassword: oldPassword,
                        newPassword: newPassword,
                    })
                })
                    .then((res) => {
                        if(res.ok) return Promise.resolve();
                        return res.json()
                    })
                    .then(result => {
                        if(result){
                            throw new Error(result.message)
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

export default new AccountService();