import {SELECT_FOLDER, SELECT_NOTICE_MODAL, SELECT_TERMINAL} from "./types";

export const selectFolder = () => ({
    type: SELECT_FOLDER,
});

export const selectTerminal = () => ({
    type: SELECT_TERMINAL,
});

export const selectNoticeModal = () => ({
    type: SELECT_NOTICE_MODAL,
});