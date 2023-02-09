import AuthService from "./auth";
import {notificationList} from "../mock";

const API_URL = "http://211.229.232.100:8080/api/v1/notification"

class NotificationService {
    getNotificationList() {
        return Promise.resolve(notificationList);
    }
    removeNotification(notificationId) {
        return Promise.resolve(notificationId);
    }
}
export default new NotificationService();