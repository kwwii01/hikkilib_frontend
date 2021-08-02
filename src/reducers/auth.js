import {AUTH_ERROR, AUTH_SUCCESS, LOGIN_FAILED, LOGIN_SUCCESS} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGIN_FAILED:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.auth_token)
            return {
                ...state,
                token: action.payload.auth_token,
                isAuthenticated: true
            }
        default:
            return state;
    }
}