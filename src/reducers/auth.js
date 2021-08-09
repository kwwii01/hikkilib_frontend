import {
    AUTH_ERROR,
    AUTH_SUCCESS,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED, REGISTRATION_FAILED, REGISTRATION_SUCCESS, LOAD_PROFILE_FAILED, LOAD_PROFILE_SUCCESS,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    registrationPending: false,
    current_profile: null
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                current_profile: null

            };
        case REGISTRATION_FAILED:
        case LOGOUT_FAILED:
        case LOGOUT_SUCCESS:
        case LOGIN_FAILED:
        case AUTH_ERROR:
        case LOAD_PROFILE_FAILED:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null,
                current_profile: null
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.auth_token)
            return {
                ...state,
                token: action.payload.auth_token,
                isLoading: false,
                isAuthenticated: true,
                registrationPending: false
            };
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationPending: true
            }
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                current_profile: action.payload
            }
        default:
            return state;
    }
}