import {GET_ANIMES, GET_ANIME_DETAILS} from "./types";
import axios from "axios";

//GET ANIMES
export const getAnimes = (searchLine) => (dispatch) => {
    let url;
    if (searchLine) {
        url = `http://localhost:8000/api/animes/?search=${searchLine}`;
    } else {
        url = 'http://localhost:8000/api/animes/';
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