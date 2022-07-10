import {
    DESELECT_FOLDER,
    DESELECT_NOTICE_MODAL,
    DESELECT_TERMINAL,
    SELECT_FOLDER,
    SELECT_NOTICE_MODAL,
    SELECT_TERMINAL
} from "./types";

export const selectFolder = () => ({
    type: SELECT_FOLDER,
});

export const selectTerminal = () => ({
    type: SELECT_TERMINAL,
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

export const deselectTerminal = () => ({
    type: DESELECT_TERMINAL,
});


