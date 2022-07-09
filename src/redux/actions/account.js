import {
    LOAD_MYPAGE_SUCCESS,
    LOAD_MYPAGE_FAIL,
} from "./types";

import AccountService from "../../service/account";

export const getMyInfo = () => (dispatch) => {
    return AccountService.getMyInfo()
        .then(
            (data) => {
                dispatch({
                    type: LOAD_MYPAGE_SUCCESS,
                    payload: { info: data },
                });
                return Promise.resolve();
            }
        )
        .catch(
            (err) => {
                dispatch({
                    type: LOAD_MYPAGE_FAIL,
                    payload: { error: err },
                });
                return Promise.reject();
            }
        );
};