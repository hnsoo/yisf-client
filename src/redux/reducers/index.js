import { combineReducers } from "redux";
import auth from "./auth";
import folder from "./folder";

export default combineReducers({
    auth,
    folder,
});