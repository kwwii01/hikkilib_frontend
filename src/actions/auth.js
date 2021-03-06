import {
    AUTH_ERROR,
    AUTH_SUCCESS, LOAD_PROFILE_FAILED, LOAD_PROFILE_SUCCESS,
    LOGIN_FAILED,
    LOGIN_SUCCESS, LOGOUT_FAILED,
    LOGOUT_SUCCESS,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS
} from "./types";
import axios from "axios";
import {addErrorMessage, addSuccessMessage} from "./messages";

//LOAD PROFILE OF CURRENT USER
export const loadProfile = (token) => (dispatch) => {
    const config = {
        headers: {
            'Authorization': `Token ${token}`
        }
    }
    axios
        .get(`http://localhost:8000/api/profiles/me/`, config)
        .catch(err => {
            dispatch({
                type: LOAD_PROFILE_FAILED,
            });
        })
        .then(res => {
            dispatch({
                type: LOAD_PROFILE_SUCCESS,
                payload: res.data
            });
        });
}

//CHECK TOKEN & LOAD USER
export const loadUser = (token) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get('http://localhost:8000/auth/users/me/', config)
        .catch(err => {
            dispatch({
                type: AUTH_ERROR,
            });
        })
        .then(res => {
            dispatch({
                type: AUTH_SUCCESS,
                payload: res.data
            })
            dispatch(loadProfile(token));
        });
};

//LOGIN USER
export const loginUser = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //REQUEST BODY
    const body = JSON.stringify({ username, password });

    axios
        .post('http://localhost:8000/auth/token/login/', body, config)
        .catch(err => {
            const msg = err.response.data.non_field_errors.join();
            dispatch(addErrorMessage(msg));
            return ({
                type: LOGIN_FAILED,
            });
        })
        .then(res => {
            dispatch(addSuccessMessage('Successfully logged in!'));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        });
};

//LOGOUT USER
export const logoutUser = (token) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .post('http://localhost:8000/auth/token/logout/','' ,config)
        .catch(err => {
            dispatch(addErrorMessage('Something went wrong.'));
            return ({
                type: LOGOUT_FAILED,
            });
        })
        .then(res => {
            dispatch(addSuccessMessage('Successfully logged out!'));
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        });
};

//REGISTER USER
export const registerUser = (username, password, email) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = email ? JSON.stringify({username, password, email}) : JSON.stringify({username, password});

    axios
        .post('http://localhost:8000/auth/users/', body, config)
        .catch(err => {
            if (err.response.data.username) {
                dispatch(addErrorMessage(err.response.data.username.join('\n')));
            }
            if (err.response.data.email) {
                dispatch(addErrorMessage(err.response.data.email.join('\n')));
            }
            if (err.response.data.password) {
                dispatch(addErrorMessage(err.response.data.password.join('\n')));
            }
            return {
                type: REGISTRATION_FAILED,
            };
        })
        .then(res => {
            dispatch(addSuccessMessage('Successfully created new user, log in and you are ready to go!'));
            dispatch({
                type: REGISTRATION_SUCCESS,
            });
        })
}