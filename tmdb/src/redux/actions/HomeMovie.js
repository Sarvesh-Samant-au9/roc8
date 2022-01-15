import axios from "axios";
import { triggerSwal } from "./swalToast";
import { apiKey } from "../config";
import {
  GET_DISCOVER_MOVIE_LIST,
  GET_FILTER_MOVIE_LIST,
  TOGGLE_IS_LOADING_MOVIE_DATA,
  TOGGLE_IS_LOADING_MOVIE_LIST,
} from "../reducers/ConstantActions";
const api_key = `api_key=${apiKey}`;
const discover_movie_url = "https://api.themoviedb.org/3/movie";
const filter_movie_url = "https://api.themoviedb.org/3/discover/movie";

export const fetchDiscoverMovieList = (type, page_no) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DISCOVER_MOVIE_LIST,
      payload: {
        movieList: null,
        totalPages: null,
        currentPage: null,
        type: null,
        parameters: [],
        isLoadingMovieList: false,
      },
    });
    dispatch({
      type: TOGGLE_IS_LOADING_MOVIE_DATA,
    });

    const { data } = await axios.get(
      `${discover_movie_url}/${type}?${api_key}&language=en-US&page=${page_no}`
    );
    dispatch({
      type: GET_DISCOVER_MOVIE_LIST,
      payload: {
        movieList: data.results,
        totalPages: data.total_pages,
        currentPage: data.page,
        type: "DISCOVER_MOVIE",
        parameters: {
          discover_type: type,
          page_no: page_no,
        },
      },
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_MOVIE_LIST,
    });
  }
};

export const fetchFilterMovieList = (query, page_no) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FILTER_MOVIE_LIST,
      payload: {
        movieList: null,
        totalPages: null,
        currentPage: null,
        type: null,
        parameters: [],
      },
    });
    dispatch({
      type: TOGGLE_IS_LOADING_MOVIE_LIST,
    });
    const { data } = await axios.get(
      `${filter_movie_url}?${api_key}&language=en-US${query}&page=${page_no}`
    );
    dispatch({
      type: GET_FILTER_MOVIE_LIST,
      payload: {
        movieList: data.results,
        totalPages: data.total_pages,
        currentPage: data.page,
        type: "FILTER_MOVIE",
        parameters: {
          filter_query: query,
          page_no: page_no,
        },
      },
    });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_MOVIE_LIST,
    });
  }
};
