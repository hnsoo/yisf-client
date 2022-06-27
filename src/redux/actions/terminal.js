import {
    OPEN_TERMINAL,
    CLOSE_TERMINAL,
    LOAD_PROBLEM_SUCCESS,
    LOAD_PROBLEM_FAIL,
} from "./types";
import ProblemService from "../../service/problem";

export const openTerminal = (info) => ({
    type: OPEN_TERMINAL,
    payload: { problem: info },
});

export const closeTerminal = () => ({
    type: CLOSE_TERMINAL,
});

export const getProblems = (field) => (dispatch) => {
    return ProblemService.problemList(field)
        .then(
            (data) => {
                dispatch({
                    type: LOAD_PROBLEM_SUCCESS,
                    payload: { problems: data },
                });
                return Promise.resolve();
            }
        )
        .catch(
            () => {
                dispatch({
                    type: LOAD_PROBLEM_FAIL,
                });
                return Promise.reject();
            }
        );
};