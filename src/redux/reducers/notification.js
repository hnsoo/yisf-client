import {
    CLOSE_NOTIFICATION,
    LOAD_NOTIFICATION_SUCCESS,
    LOAD_NOTIFICATION_FAIL,
    OPEN_NOTIFICATION,
    REMOVE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION_FAIL, READ_NOTIFICATIONS
} from "../actions/types";

const initialState = { isNotificationOpened: false, notifications: [], isNewNotification: false}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_NOTIFICATION:
            return {
                ...state,
                isNotificationOpened: true,
            };
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                isNotificationOpened: false,
            };
        case LOAD_NOTIFICATION_SUCCESS:
            for(let oldNotification of state.notifications){
                let isNew = false;
                for(let newNotification of payload.notifications){
                    if(oldNotification.id === newNotification.id){
                        isNew = true;
                    }
                }
                // 기존에 없던 알림이 발결된 경우
                if(!isNew){
                    return {
                        ...state,
                        notifications: payload.notifications,
                        isNewNotification: true,
                    };
                }
            }
            return {
                ...state,
                notifications: payload.notifications,
            };
        case LOAD_NOTIFICATION_FAIL:
            return {
                ...state,
                notifications: null,
            };
        case REMOVE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                notifications: state.notifications.filter(notification => notification.id !== payload.notificationId),
            };
        case REMOVE_NOTIFICATION_FAIL:
            return {
                ...state,
            };
        case READ_NOTIFICATIONS:
            return {
                ...state,
                isNewNotification: false,
            }
        default:
            return state;
    }
}