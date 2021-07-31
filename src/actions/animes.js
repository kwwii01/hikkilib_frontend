import axios from "axios";

import {GET_ANIMES} from "./types";

//GET ANIMES
export const getAnimes = () => dispatch => {
    axios.get('api/animes/')
        .then(res => {
            dispatch({
                type: GET_ANIMES,
                payload: res.data
            });
        }).catch(err => console.log(err));
}