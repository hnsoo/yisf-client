import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from "../actions/types";
import {getCookie} from "../../service/cookie"

const token = localStorage.getItem("token");
const tokenExpired = localStorage.getItem("tokenExpired")
const refresh = getCookie("refresh")

const initialState = (token && tokenExpired && refresh)
    ? { isLoggedIn: true, token}
    : { isLoggedIn: false, token: null};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                error: payload.error,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            }

        default:
            return state;
    }
}

