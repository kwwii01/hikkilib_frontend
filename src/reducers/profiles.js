import {GET_PROFILE_FAIL, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS} from "../actions/types";

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
        default:
            return state;
    }
}