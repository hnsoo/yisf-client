import AuthService from "../../service/Auth";

export const login = (id, password) => (dispatch) => {
    return AuthService.login(id, password).then(
        (data) => {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token: data },
            });
            return Promise.resolve();
        },
        () => {
            dispatch({
                type: "LOGIN_FAIL",
            });
            return Promise.reject();
        }
    );
};
