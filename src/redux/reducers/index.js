import { combineReducers } from "redux";
import auth from "./auth";
import folder from "./folder";
import terminal from "./terminal";
import zIndex from "./zIndex"

export default combineReducers({
    auth,
    folder,
    terminal,
    zIndex,
});