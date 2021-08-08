import axios from "axios";
import {GET_PROFILE_FAIL, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS} from "./types";
import {addErrorMessage} from "./messages";

export const getProfile = (profileId) => (dispatch) => {
    dispatch({
        type: GET_PROFILE_LOADING
    });
    axios
        .get(`http://localhost:8000/api/profiles/${profileId}/`)
        .catch(err => {
            dispatch(addErrorMessage("There's no profile with requested id."));
            return {
                type: GET_PROFILE_FAIL
            };
        })
        .then(res => {
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: res.data
            });
        })
}