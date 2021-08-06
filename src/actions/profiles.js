import axios from "axios";
import {GET_PROFILE_FAIL, GET_PROFILE_SUCCESS} from "./types";

export const getProfile = (profileId) => (dispatch) => {
    axios
        .get(`http://localhost:8000/api/profiles/${profileId}/`)
        .catch(err => {
            dispatch({
                type: GET_PROFILE_FAIL
            });
        })
        .then(res => {
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: res.data
            });
        })
}