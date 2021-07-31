import {GET_ANIMES} from "../actions/types";

const initialState = {
    animes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANIMES:
            return {
                ...state,
                animes: action.payload
            }
        default:
            return state;
    }
}