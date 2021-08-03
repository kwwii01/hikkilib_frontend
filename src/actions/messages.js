import {ADD_ERROR_MESSAGE, ADD_SUCCESS_MESSAGE, ADD_WARNING_MESSAGE, FLUSH_MESSAGES} from "./types";

//ADD SUCCESS MESSAGE
export const addSuccessMessage = (message) => {
    return {
        type: ADD_SUCCESS_MESSAGE,
        payload: message
    }
}

//ADD WARNING MESSAGE
export const addWarningMessage = (message) => {
    return {
        type: ADD_WARNING_MESSAGE,
        payload: message
    }
}

//ADD ERROR MESSAGE
export const addErrorMessage = (message) => {
    return {
        type: ADD_ERROR_MESSAGE,
        payload: message
    }
}

//FLUSH MESSAGES STATE
export const flushMessages = () => {
    return {
        type: FLUSH_MESSAGES
    }
}