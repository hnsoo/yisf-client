import {
    CLOSE_FOLDER,
    OPEN_FOLDER,
    OPEN_MYPAGE,
    OPEN_NOTICE,
    OPEN_RANK,
    OPEN_SPONSOR,
    OPEN_PWNABLE,
    OPEN_REVERSING,
    OPEN_FORENSIC,
    OPEN_WEB,
    OPEN_MISC
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
        case OPEN_REVERSING:
            return {
                ...state,
                isOpened: true,
                view: "reversing"
            }
        case OPEN_FORENSIC:
            return {
                ...state,
                isOpened: true,
                view: "forensic"
            }
        case OPEN_WEB:
            return {
                ...state,
                isOpened: true,
                view: "web"
            }
        case OPEN_MISC:
            return {
                ...state,
                isOpened: true,
                view: "misc"
            }

        default:
            return state;
    }
}

