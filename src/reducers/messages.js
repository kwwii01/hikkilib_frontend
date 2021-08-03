import {ADD_SUCCESS_MESSAGE, ADD_WARNING_MESSAGE, FLUSH_MESSAGES, ADD_ERROR_MESSAGE} from "../actions/types";

const initialState = {
    warnings: [],
    success: [],
    errors: [],
    isFlushed: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SUCCESS_MESSAGE:
            return {
                ...state,
                success: [...state.success, action.payload],
                isFlushed: false
            }
        case ADD_WARNING_MESSAGE:
            return {
                ...state,
                warnings: [...state.warnings, action.payload],
                isFlushed: false
            }
        case ADD_ERROR_MESSAGE:
            return {
                ...state,
                errors: [...state.errors, action.payload],
                isFlushed: false
            }
        case FLUSH_MESSAGES:
            return {
                ...state,
                warnings: [],
                success: [],
                errors: [],
                isFlushed: true
            }
        default:
            return state;
    }
}