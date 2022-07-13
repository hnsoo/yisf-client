import {
    CLOSE_NOTIFICATION,
    LOAD_NOTIFICATION_FAIL,
    LOAD_NOTIFICATION_SUCCESS,
    OPEN_NOTIFICATION
} from "./types";
import NotificationService from "../../service/notification";

export const openNotification = (info) => ({
    type: OPEN_NOTIFICATION,
});

export const closeNotification = () => ({
    type: CLOSE_NOTIFICATION,
});

export const getNotifications = () => (dispatch) => {
    return NotificationService.getNotificationList()
        .then(
            (data) => {
                dispatch({
                    type: LOAD_NOTIFICATION_SUCCESS,
                    payload: { notifications: data },
                });
                return Promise.resolve();
            }
        )
        .catch(
            (err) => {
                dispatch({
                    type: LOAD_NOTIFICATION_FAIL,
                });
                return Promise.reject(err);
            }
        );
};