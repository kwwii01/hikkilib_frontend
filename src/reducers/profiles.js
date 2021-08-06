import {GET_PROFILE_FAIL, GET_PROFILE_SUCCESS} from "../actions/types";

const initialState = {
    profile: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                profile: null
            };
        default:
            return state;
    }
}