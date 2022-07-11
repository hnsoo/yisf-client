import {CLOSE_PROBLEM_MODAL, LOAD_PROBLEM_FAIL, LOAD_PROBLEM_SUCCESS, OPEN_PROBLEM_MODAL} from "../actions/types";

const initialState = { isProblemModalOpened: false, problems: null, problem: null }

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_PROBLEM_MODAL:
            return {
                ...state,
                isProblemModalOpened: true,
                problem: payload.problem,
            };
        case CLOSE_PROBLEM_MODAL:
            return {
                ...state,
                isProblemModalOpened: false,
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