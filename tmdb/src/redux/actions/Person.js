import axios from "axios";
import { triggerSwal } from "./swalToast";
import { apiKey } from "../config";
import {
  GET_KNOWN_FOR,
  GET_PERSON_DETAIL,
  TOGGLE_IS_LOADING_KNOWN_FOR,
  TOGGLE_IS_LOADING_PERSON_DETAIL,
} from "../reducers/ConstantActions";
const api_key = `api_key=${apiKey}`;
const base_url = "https://api.themoviedb.org/3/person/";

export const fetchPersonDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PERSON_DETAIL,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_PERSON_DETAIL,
    });
    const { data } = await axios.get(
      `${base_url}${id}?${api_key}&language=en-US`
    );
    dispatch({
      type: GET_PERSON_DETAIL,
      payload: data,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_PERSON_DETAIL,
    });
  }
};

export const fetchKnownFor = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_KNOWN_FOR,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_KNOWN_FOR,
    });
    const { data } = await axios.get(
      `${base_url}${id}/movie_credits?${api_key}&language=en-US`
    );
    dispatch({
      type: GET_KNOWN_FOR,
      payload: data.cast,
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_KNOWN_FOR,
    });
  }
};
