import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from "./types";

import AuthService from "../../service/auth";

export const login = (id, password) => (dispatch) => {
    return AuthService.login(id, password)
        .then(
            (data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { token: data },
                });
                return Promise.resolve();
            }
        )
        .catch(
            () => {
                dispatch({
                    type: LOGIN_FAIL,
                });
                return Promise.reject();
            }
        );
};

export const logout = () => ({
    type: LOGOUT_SUCCESS,
});
