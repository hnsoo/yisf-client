import { OPEN_FOLDER, CLOSE_FOLDER, OPEN_NOTICE } from "./types";

export const openFolder = () => ({
    type: OPEN_FOLDER,
});

export const closeFolder = () => ({
    type: CLOSE_FOLDER,
});

export const openNotice = () => ({
    type: OPEN_NOTICE,
});