import {SELECT_FOLDER, SELECT_TERMINAL} from "../actions/types";

const initialState = { folderZIndex: 1, terminalZIndex: 2}

export default function (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case SELECT_FOLDER:
            return {
                ...state,
                folderZIndex: 2,
                terminalZIndex:1,
            };
        case SELECT_TERMINAL:
            return {
                ...state,
                folderZIndex: 1,
                terminalZIndex:2,
            };
        default:
            return state;
    }
}