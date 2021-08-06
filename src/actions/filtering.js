import axios from "axios";
import {GET_FILTERING_DATA, GET_GENRES_LIST, GET_STATUSES_LIST, GET_TYPES_LIST} from "./types";

const getGenres = () => (dispatch) => {
    axios.get('http://localhost:8000/api/genres/')
        .catch(err => console.log(err))
        .then(res => dispatch({
            type: GET_GENRES_LIST,
            payload: res.data.map(obj => obj.name)
        }))
}

const getStatuses = () => (dispatch) => {
    axios.get('http://localhost:8000/api/statuses/')
        .catch(err => console.log(err))
        .then(res => dispatch({
            type: GET_STATUSES_LIST,
            payload: res.data.map(obj => obj.name)
        }))
}

const getTypes = () => (dispatch) => {
    axios.get('http://localhost:8000/api/types/')
        .catch(err => console.log(err))
        .then(res => dispatch({
            type: GET_TYPES_LIST,
            payload: res.data.map(obj => obj.name)
        }))
}

export const getFilteringData = () => (dispatch) => {
    dispatch(getGenres());
    dispatch(getStatuses());
    dispatch(getTypes());
    dispatch({
        type: GET_FILTERING_DATA
    })
}