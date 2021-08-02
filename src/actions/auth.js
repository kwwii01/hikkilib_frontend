import {AUTH_ERROR, AUTH_SUCCESS, LOGIN_FAILED, LOGIN_SUCCESS} from "./types";
import axios from "axios";

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
        .then(res => {
            dispatch({
                type: AUTH_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: AUTH_ERROR,
            });
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
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILED,
            });
        });
};