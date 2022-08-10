import {MOVE_TO_READY} from "../actions/types";

const initialState = { isPlaying: true }

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case MOVE_TO_READY:
            return {
                ...state,
                isPlaying: false,
            };
        default:
            return state;
    }
}