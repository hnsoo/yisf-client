import {
    DESELECT_FOLDER,
    DESELECT_NOTICE_MODAL,
    DESELECT_PROBLEM_MODAL,
    SELECT_FOLDER,
    SELECT_NOTICE_MODAL,
    SELECT_PROBLEM_MODAL
} from "./types";

export const selectFolder = () => ({
    type: SELECT_FOLDER,
});

export const selectProblemModal = () => ({
    type: SELECT_PROBLEM_MODAL,
});

export const selectNoticeModal = () => ({
    type: SELECT_NOTICE_MODAL,
});

export const deselectNoticeModal = () => ({
    type: DESELECT_NOTICE_MODAL,
});

export const deselectFolder = () => ({
    type: DESELECT_FOLDER,
});

export const deselectProblemModal = () => ({
    type: DESELECT_PROBLEM_MODAL,
});


