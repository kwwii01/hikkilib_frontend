import { SET_SEARCH_LINE, FILTERING_FLUSH } from "./types";

export const setSearchLine = (keyword) => (dispatch) => {
    dispatch({
       type: SET_SEARCH_LINE,
       payload: keyword
    });
};

export const flushFilters = () => (dispatch) => {
    dispatch({
        type: FILTERING_FLUSH
    })
};