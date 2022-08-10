import AuthService from "./auth";

const API_URL = "http://211.229.232.100:8080/api/v1/notification"

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
    removeNotification(notificationId) {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + "/" + notificationId , {
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
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
export default new NotificationService();