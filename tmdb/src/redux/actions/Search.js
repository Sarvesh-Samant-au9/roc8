import axios from "axios";
import { triggerSwal } from "./swalToast";
import { apiKey } from "../config";
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_SUGGESTION,
  TOGGLE_IS_LOADING_SEARCH_RESULTS,
  TOGGLE_IS_LOADING_SEARCH_SUGGESTION,
} from "../reducers/ConstantActions";
const api_key = `api_key=${apiKey}`;
const base_url = `https://api.themoviedb.org/3/search/multi?${api_key}&language=en-US`;

export const emptySearchSuggestion = () => (dispatch) => {
  dispatch({
    type: GET_SEARCH_SUGGESTION,
    payload: null,
  });
};

export const fetchSearchSuggestion = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SEARCH_SUGGESTION,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_SEARCH_SUGGESTION,
    });
    const { data } = await axios.get(
      `${base_url}/&query=${keyword}&page=1&include_adult=false`
    );
    dispatch({
      type: GET_SEARCH_SUGGESTION,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_SEARCH_SUGGESTION,
    });
  }
};

export const fetchSearchResults = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_SEARCH_RESULTS,
    });
    const { data } = await axios.get(
      `${base_url}/&query=${keyword}&page=1&include_adult=false`
    );
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_SEARCH_RESULTS,
    });
  }
};
