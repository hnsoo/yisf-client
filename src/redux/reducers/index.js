import { combineReducers } from "redux";
import auth from "./auth";
import folder from "./folder";
import problem from "./problem";
import zIndex from "./zIndex"
import notice from "./notice";
import account from "./account";
import notification from "./notification";
import ready from "./ready";

export default combineReducers({
    auth,
    folder,
    problem,
    zIndex,
    notice,
    account,
    notification,
    ready,
});