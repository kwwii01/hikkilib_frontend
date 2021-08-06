import {
    GET_GENRES_LIST,
    GET_TYPES_LIST,
    GET_STATUSES_LIST,
    GET_FILTERING_DATA
} from "../actions/types";

const initialState = {
    genres: [],
    types: [],
    statuses: [],
    ready: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GENRES_LIST:
            return {
                ...state,
                genres: action.payload
            }
        case GET_TYPES_LIST:
            return {
                ...state,
                types: action.payload
            }
        case GET_STATUSES_LIST:
            return {
                ...state,
                statuses: action.payload
            }
        case GET_FILTERING_DATA:
            return {
                ...state,
                ready: true
            }
        default:
            return state;
    }
};