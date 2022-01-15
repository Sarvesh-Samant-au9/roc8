import axios from "axios";
import { apiKey } from "../config";
import {
  GET_NOW_PLAYING_MOVIE,
  GET_TRENDING_MOVIE,
  TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE,
  TOGGLE_IS_LOADING_TRENDING_MOVIE,
} from "../reducers/ConstantActions";
const api_key = `api_key=${apiKey}`;
const turl = "https://api.themoviedb.org/3/trending/movie";

export const fetchTrendingMovieList = (type) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TRENDING_MOVIE,
      payload: {
        movieList: null,
        TrendingType: null,
      },
    });
    dispatch({ type: TOGGLE_IS_LOADING_TRENDING_MOVIE });

    const { data } = await axios.get(
      `${turl}/${type}?${api_key}&language=en-US&page=1`
    );
    dispatch({
      type: GET_TRENDING_MOVIE,
      payload: {
        movieList: data.results,
        TrendingType: type,
      },
    });
  } finally {
    dispatch({ type: TOGGLE_IS_LOADING_TRENDING_MOVIE });
  }
};

export const fetchNowPlayingMovieList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_NOW_PLAYING_MOVIE,
      payload: null,
    });
    dispatch({
      type: TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE,
    });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type: GET_NOW_PLAYING_MOVIE,
      payload: data.results,
    });
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE,
    });
  }
};
