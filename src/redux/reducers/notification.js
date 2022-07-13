import {CLOSE_NOTIFICATION, LOAD_NOTIFICATION_SUCCESS, LOAD_NOTIFICATION_FAIL, OPEN_NOTIFICATION} from "../actions/types";

const initialState = { isNotificationOpened: false, notifications: null}

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
            return {
                ...state,
                notifications: payload.notifications,
            };
        case LOAD_NOTIFICATION_FAIL:
            return {
                ...state,
                notifications: null,
            };
        default:
            return state;
    }
}