import {
    OPEN_TERMINAL,
    CLOSE_TERMINAL
} from "./types";


export const openTerminal = () => ({
    type: OPEN_TERMINAL,
});

export const closeTerminal = () => ({
    type: CLOSE_TERMINAL,
});