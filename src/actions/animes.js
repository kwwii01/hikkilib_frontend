import {GET_ANIMES, GET_ANIME_DETAILS, GET_ANIME_DETAILS_ERROR} from "./types";
import axios from "axios";
import {addErrorMessage} from "./messages";

//GET ANIMES
export const getAnimes = (searchLine, genres, types, statuses) => (dispatch) => {
    let url = 'http://localhost:8000/api/animes/?';
    if (searchLine && (searchLine !== '')) {
        url += `&search=${searchLine}`;
    }

    if (genres) {
        for (const genre of genres) {
            url += `&genres=${genre}`;
        }
    }
    if (types) {
        url += `&types=${types.join(',')}`;
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
            dispatch(addErrorMessage("There's no anime with requested id."))
            return {
                type: GET_ANIME_DETAILS_ERROR
            }
        })
        .then(res => {
            dispatch({
                type: GET_ANIME_DETAILS,
                payload: res.data
            });
        });
};