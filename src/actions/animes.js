import {GET_ANIMES, GET_ANIME_DETAILS} from "./types";

//GET ANIMES
export const setAnimes = (animes) => {
    return {
        type: GET_ANIMES,
        payload: animes
    }
}

//GET EXACT ANIME DETAILS
export const setAnimeDetails = (anime) => {
    return {
        type: GET_ANIME_DETAILS,
        payload: anime
    }
}