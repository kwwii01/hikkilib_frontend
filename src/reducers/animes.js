import {GET_ANIME_DETAILS, GET_ANIME_DETAILS_ERROR, GET_ANIMES} from "../actions/types";

const initialState = {
    animes: [],
    anime: null,
}

export default function animes(state = initialState, action) {
    switch (action.type) {
        case GET_ANIMES:
            return {
                ...state,
                animes: action.payload,
            }
        case GET_ANIME_DETAILS:
            return {
                ...state,
                anime: action.payload
            }
        case GET_ANIME_DETAILS_ERROR:
            return {
                ...state,
                anime: null
            }
        default:
            return state;
    }
}