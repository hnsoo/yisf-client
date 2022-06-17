import {
    CLOSE_FOLDER,
    OPEN_FOLDER,
    OPEN_MYPAGE,
    OPEN_NOTICE,
    OPEN_RANK,
    OPEN_SPONSOR,
    OPEN_PWNABLE
} from "../ations/types";

const initialState = { isOpened: false }

export default function (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case OPEN_FOLDER:
            return {
                ...state,
                isOpened: true,
            };
        case CLOSE_FOLDER:
            return {
                ...state,
                isOpened: false,
            };
        case OPEN_NOTICE:
            return {
                ...state,
                isOpened: true,
                view: "notice",
            };
        case OPEN_MYPAGE:
            return {
                ...state,
                isOpened: true,
                view: "mypage",
            };
        case OPEN_RANK:
            return {
                ...state,
                isOpened: true,
                view: "rank",
            };
        case OPEN_SPONSOR:
            return {
                ...state,
                isOpened: true,
                view: "sponsor",
            };
        case OPEN_PWNABLE:
            return {
                ...state,
                isOpened: true,
                view: "pwnable"
            }

        default:
            return state;
    }
}

