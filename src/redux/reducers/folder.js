import {
    CLOSE_FOLDER,
    OPEN_FOLDER,
    OPEN_NOTICE,
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

        default:
            return state;
    }
}

