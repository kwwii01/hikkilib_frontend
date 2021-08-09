import axios from "axios";
import {
    GET_PROFILE_FAIL,
    GET_PROFILE_LOADING,
    GET_PROFILE_SUCCESS,
    LOAD_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL
} from "./types";
import {addErrorMessage, addSuccessMessage} from "./messages";

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

export const updateProfile = (picture, sex, birth_date, bio, token, profileId) => (dispatch) => {
    const config = {
        headers: {}
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    } else {
        return {
            type: UPDATE_PROFILE_FAIL
        };
    }

    const formData = new FormData();

    if (picture) {
        formData.append('picture', picture);
    }
    if (bio) {
        formData.append('bio', bio);
    }
    if (sex) {
        formData.append('sex', sex);
    }
    if (birth_date) {
        const dateString = `${birth_date.getFullYear()}-${birth_date.getMonth() + 1}-${birth_date.getDate()}`;
        console.log(dateString);
        formData.append('birth_date', dateString);
    }

    axios
        .put(`http://localhost:8000/api/profiles/${profileId}/update`, formData, config)
        .catch(err => {
            dispatch(addErrorMessage('Error occurred while updating your profile. Try again later or with different data'));
            return {
                type: UPDATE_PROFILE_FAIL
            }
        })
        .then(res => {
            dispatch(addSuccessMessage("Successfully updated your profile!"));
            dispatch ({
                type: LOAD_PROFILE_SUCCESS,
                payload: res.data
            });
        });
};