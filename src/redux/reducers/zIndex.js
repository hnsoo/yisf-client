import {
    DESELECT_FOLDER, DESELECT_NOTICE_MODAL,
    DESELECT_PROBLEM_MODAL,
    SELECT_FOLDER,
    SELECT_NOTICE_MODAL,
    SELECT_PROBLEM_MODAL
} from "../actions/types";

const initialState = { folderZIndex: 0, problemModalZIndex: 0, noticeModalZIndex: 0}

export default function (state = initialState, action) {
    const changeZIndex = (type) => {
        let result = {...state}
        for(let key in state){
            if(state[key] === 3){
                result[key] = 2
            }
            else if(state[key] === 2){
                result[key] = 1
            }
        }
        result[type] = 3
        return result
    }

    const { type } = action;
    switch (type) {
        case SELECT_FOLDER:
            return changeZIndex("folderZIndex");
        case SELECT_PROBLEM_MODAL:
            return changeZIndex("problemModalZIndex");
        case SELECT_NOTICE_MODAL:
            return changeZIndex("noticeModalZIndex");
        case DESELECT_FOLDER:
            return {
                ...state,
                folderZIndex: 0,
            }
        case DESELECT_PROBLEM_MODAL:
            return {
                ...state,
                problemModalZIndex: 0,
            }
        case DESELECT_NOTICE_MODAL:
            return {
                ...state,
                noticeModalZIndex: 0,
            }
        default:
            return state;
    }
}