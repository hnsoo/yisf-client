import AuthService from "./auth";

const API_URL = "http://15.165.86.75:8080/api/v1/notification"

class NotificationService {
    getNotificationList() {
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
                        if(result.errorCode) throw new Error(result);
                        return result;
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
            );
    }
}
export default new NotificationService();