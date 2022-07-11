import {
    OPEN_PROBLEM_MODAL,
    CLOSE_PROBLEM_MODAL,
    LOAD_PROBLEM_SUCCESS,
    LOAD_PROBLEM_FAIL,
} from "./types";
import ProblemService from "../../service/problem";

export const openProblemModal = (info) => ({
    type: OPEN_PROBLEM_MODAL,
    payload: { problem: info },
});

export const closeProblemModal = () => ({
    type: CLOSE_PROBLEM_MODAL,
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
            (err) => {
                dispatch({
                    type: LOAD_PROBLEM_FAIL,
                });
                return Promise.reject(err);
            }
        );
};