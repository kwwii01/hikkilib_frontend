import {combineReducers} from "redux";
import animes from "./animes";
import auth from "./auth";
import messages from "./messages";

export default combineReducers({
    animes,
    auth,
    messages
});