import { combineReducers } from "redux";
import auth from "./auth";
import message from "./folder";

export default combineReducers({
    auth,
    message,
});