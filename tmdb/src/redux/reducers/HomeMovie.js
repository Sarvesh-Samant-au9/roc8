import {
  GET_DISCOVER_MOVIE_LIST,
  GET_FILTER_MOVIE_LIST,
  TOGGLE_IS_LOADING_MOVIE_LIST,
} from "./ConstantActions";

const initialState = {
  movieList: null,
  totalPages: null,
  currentPage: null,
  type: null,
  parameters: [],
  isLoadingMovieList: false,
};

const HomeMovie = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DISCOVER_MOVIE_LIST:
      return {
        ...state,
        movieList: payload.movieList,
        type: payload.type,
        parameters: payload.parameters,
        totalPages: payload.totalPages,
        currentPage: payload.currentPage,
      };
    case GET_FILTER_MOVIE_LIST:
      return {
        ...state,
        movieList: payload.movieList,
        type: payload.type,
        parameters: payload.parameters,
        totalPages: payload.totalPages,
        currentPage: payload.currentPage,
      };

    case TOGGLE_IS_LOADING_MOVIE_LIST:
      return {
        ...state,
        isLoadingMovieList: !state.isLoadingMovieList,
      };

    default:
      return state;
  }
};

export default HomeMovie;
