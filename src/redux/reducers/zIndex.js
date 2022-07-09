import {SELECT_FOLDER, SELECT_NOTICE_MODAL, SELECT_TERMINAL} from "../actions/types";

const initialState = { folderZIndex: 0, terminalZIndex: 0, noticeModalZIndex: 0}

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
        case SELECT_TERMINAL:
            return changeZIndex("terminalZIndex");
        case SELECT_NOTICE_MODAL:
            return changeZIndex("noticeModalZIndex")
        default:
            return state;
    }
}