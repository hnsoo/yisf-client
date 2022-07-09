import {
    OPEN_NOTICE_MODAL,
    CLOSE_NOTICE_MODAL,
    LOAD_NOTICE_SUCCESS,
    LOAD_NOTICE_FAIL
} from "./types";
import NoticeService from "../../service/notice";

export const openNoticeModal = (info) => ({
    type: OPEN_NOTICE_MODAL,
    payload: { notice: info },
});

export const closeNoticeModal = () => ({
    type: CLOSE_NOTICE_MODAL,
});

export const getNotices = () => (dispatch) => {
    return NoticeService.getNotice()
        .then(
            (data) => {
                dispatch({
                    type: LOAD_NOTICE_SUCCESS,
                    payload: { notices: data },
                });
                return Promise.resolve();
            }
        )
        .catch(
            (err) => {
                dispatch({
                    type: LOAD_NOTICE_FAIL,
                });
                return Promise.reject(err);
            }
        );
};