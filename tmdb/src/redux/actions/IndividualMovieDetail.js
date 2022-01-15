import axios from "axios";
import { triggerSwal } from "./swalToast";
import { apiKey } from "../config";
import {
  GET_CASTS_LIST,
  GET_MOVIE_DATA,
  GET_REC_MOVIES_LIST,
  GET_REVIEWS_LIST,
  TOGGLE_IS_LOADING_CASTS_LIST,
  TOGGLE_IS_LOADING_MOVIE_DATA,
  TOGGLE_IS_LOADING_REC_MOVIES_LIST,
  TOGGLE_IS_LOADING_REVIEWS_LIST,
} from "../reducers/ConstantActions";
const api_key = `api_key=${apiKey}`;
const base_url = "https://api.themoviedb.org/3/movie/";

export const fetchMovieData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MOVIE_DATA,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_MOVIE_DATA,
    });
    const { data } = await axios.get(
      `${base_url}${id}?${api_key}&append_to_response=videos,images`
    );
    dispatch({
      type: GET_MOVIE_DATA,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({ type: TOGGLE_IS_LOADING_MOVIE_DATA });
  }
};

export const fetchCastsList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CASTS_LIST,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_CASTS_LIST,
    });
    const { data } = await axios.get(
      `${base_url}${id}/credits?${api_key}&language=en-US`
    );
    dispatch({
      type: GET_CASTS_LIST,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_CASTS_LIST,
    });
  }
};

export const fetchReviewsList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_REVIEWS_LIST,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_REVIEWS_LIST,
    });
    const { data } = await axios.get(
      `${base_url}${id}/reviews?${api_key}&language=en-US&page=1`
    );
    dispatch({
      type: GET_REVIEWS_LIST,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_REVIEWS_LIST,
    });
  }
};

export const fetchRecMoviesList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_REC_MOVIES_LIST,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_REC_MOVIES_LIST,
    });
    const { data } = await axios.get(
      `${base_url}${id}/recommendations?${api_key}&language=en-US&page=1`
    );
    dispatch({
      type: GET_REC_MOVIES_LIST,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_REC_MOVIES_LIST,
    });
  }
};
