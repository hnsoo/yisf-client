import {
    CLOSE_NOTIFICATION,
    LOAD_NOTIFICATION_FAIL,
    LOAD_NOTIFICATION_SUCCESS,
    OPEN_NOTIFICATION,
    REMOVE_NOTIFICATION_FAIL,
    REMOVE_NOTIFICATION_SUCCESS,
    READ_NOTIFICATIONS
} from "./types";
import NotificationService from "../../service/notification";

export const openNotification = () => ({
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

export const removeNotification = (notificationId) => (dispatch) => {
    return NotificationService.removeNotification(notificationId)
        .then(
            () => {
                dispatch({
                    type: REMOVE_NOTIFICATION_SUCCESS,
                    payload: {notificationId: notificationId},
                });
                return Promise.resolve();
            }
        )
        .catch(
            (err) => {
                dispatch({
                    type: REMOVE_NOTIFICATION_FAIL,
                });
                return Promise.reject(err);
            }
        );
}

export const readNotifications = () => ({
    type: READ_NOTIFICATIONS,
});