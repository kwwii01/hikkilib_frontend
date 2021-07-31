import {GET_ANIME_DETAILS, GET_ANIMES} from "../actions/types";

const initialState = {
    animes: [],
    anime: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANIMES:
            return {
                ...state,
                animes: action.payload,
                anime: null
            }
        case GET_ANIME_DETAILS:
            return {
                ...state,
                anime: action.payload,
                animes: []
            }
        default:
            return state;
    }
}