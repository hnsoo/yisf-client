import { OPEN_FOLDER, CLOSE_FOLDER } from "./types";

export const openFolder = () => ({
    type: OPEN_FOLDER,
});

export const closeFolder = () => ({
    type: CLOSE_FOLDER,
});