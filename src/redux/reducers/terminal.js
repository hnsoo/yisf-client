import {OPEN_TERMINAL} from "../ations/types";

const initialState = { isTerminalOpened: false }

export default function (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case OPEN_TERMINAL:
            return {
                ...state,
                isTerminalOpened: true,
            };
        default:
            return state;
    }

}