import {FILTERING_FLUSH, SET_SEARCH_LINE} from "../actions/types";

const initialState = {
    genres: [],
    types: [],
    producers: [],
    search: null,
    isFlushed: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_LINE:
            return {
                ...state,
                search: action.payload,
                isFlushed: false
            }
        case FILTERING_FLUSH:
            return {
                ...state,
                search: null,
                genres: [],
                types: [],
                producers: [],
                isFlushed: true
            }
        default:
            return state;
    }
};