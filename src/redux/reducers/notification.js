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
            for(let newNotification of payload.notifications){
                let isNew = false;
                for(let oldNotification of state.notifications){
                    console.log(oldNotification, newNotification)
                    if(oldNotification.id === newNotification.id){
                        isNew = true;
                    }
                }
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