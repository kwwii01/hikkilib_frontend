import {GET_ANIMES, GET_ANIME_DETAILS} from "./types";
import axios from "axios";

//GET ANIMES
export const getAnimes = (searchLine, genres, types, producers, statuses) => (dispatch) => {
    let url = 'http://localhost:8000/api/animes/?';
    if (searchLine && (searchLine !== '')) {
        url += `&search=${searchLine}`;
    }

    if (genres) {
        url += `&genres=${genres.join(',')}`;
    }
    if (types) {
        url += `&types=${types.join(',')}`;
    }
    if (producers) {
        url += `&producers=${producers.join(',')}`;
    }
    if (statuses) {
        url += `&statuses=${statuses.join(',')}`;
    }

    axios.get(url)
       .catch((err) => console.log(err))
       .then(res => {
           dispatch({
               type: GET_ANIMES,
               payload: res.data
           });
   });
}

//GET EXACT ANIME DETAILS
export const getAnimeDetails = (animeId) => (dispatch) => {
    axios.get(`http://localhost:8000/api/animes/${animeId}/`)
        .catch(err => {
            console.log(err);
        })
        .then(res => {
            dispatch({
                type: GET_ANIME_DETAILS,
                payload: res.data
            });
        });
};