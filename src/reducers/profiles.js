import {GET_PROFILE_FAIL, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL} from "../actions/types";

const initialState = {
    profile: null,
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isLoading: false
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                profile: null,
                isLoading: false
            };
        case GET_PROFILE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_PROFILE_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}