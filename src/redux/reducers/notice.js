import {CLOSE_NOTICE_MODAL, LOAD_NOTICE_FAIL, LOAD_NOTICE_SUCCESS, OPEN_NOTICE_MODAL} from "../actions/types";

const initialState = { isNoticeModalOpened: false, notices: null, notice: null }

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_NOTICE_MODAL:
            return {
                ...state,
                isNoticeModalOpened: true,
                notice: payload.notice,
            };
        case CLOSE_NOTICE_MODAL:
            return {
                ...state,
                isNoticeModalOpened: false,
            };
        case LOAD_NOTICE_SUCCESS:
            return {
                ...state,
                notices: payload.notices,
            };
        case LOAD_NOTICE_FAIL:
            return {
                ...state,
                notices: null,
            };
        default:
            return state;
    }
}