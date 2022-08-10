import AuthService from "./auth";

const API_URL = "http://211.229.232.100:8080/api/v1/notice"

class NoticeService {
    getNotice() {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL, {
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
}
export default new NoticeService();