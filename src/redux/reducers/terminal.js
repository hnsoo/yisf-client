import {CLOSE_TERMINAL, LOAD_PROBLEM_FAIL, LOAD_PROBLEM_SUCCESS, OPEN_TERMINAL} from "../ations/types";

const initialState = { isTerminalOpened: false, problems: null, problem: null }

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_TERMINAL:
            return {
                ...state,
                isTerminalOpened: true,
            };
        case CLOSE_TERMINAL:
            return {
                ...state,
                isTerminalOpened: false,
            };
        case LOAD_PROBLEM_SUCCESS:
            return {
                ...state,
                problems: payload.problems,
            };
        case LOAD_PROBLEM_FAIL:
            return {
                ...state,
                problems: null,
            };
        default:
            return state;
    }


}