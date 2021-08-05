import {combineReducers} from "redux";
import animes from "./animes";
import auth from "./auth";
import messages from "./messages";
import filtering from "./filtering";

export default combineReducers({
    animes,
    auth,
    messages,
    filtering
});