import {
  GET_NOW_PLAYING_MOVIE,
  GET_RECOMMENDED_MOVIE,
  GET_TRENDING_MOVIE,
  TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE,
  TOGGLE_IS_LOADING_RECOMMENDED_MOVIE,
  TOGGLE_IS_LOADING_TRENDING_MOVIE,
} from "./ConstantActions";

const initialState = {
  trendingMovie: null,
  recommendedMovie: null,
  nowPlayingMovie: null,
  trendingType: null,
  isLoadingTrendingMovie: false,
  isLoadingRecommendedMovie: false,
  isLoadingNowPlayingMovie: false,
};
const NewHomePage = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TRENDING_MOVIE:
      return {
        ...state,
        trendingMovie: payload.movieList,
        trendingType: payload.trendingType,
      };
    case GET_RECOMMENDED_MOVIE:
      return {
        ...state,
        recommendedMovie: payload,
      };
    case GET_NOW_PLAYING_MOVIE:
      return {
        ...state,
        nowPlayingMovie: payload,
      };

    case TOGGLE_IS_LOADING_TRENDING_MOVIE:
      return {
        ...state,
        isLoadingTrendingMovie: !state.isLoadingTrendingMovie,
      };
    case TOGGLE_IS_LOADING_RECOMMENDED_MOVIE:
      return {
        ...state,
        isLoadingRecommendedMovie: !state.isLoadingRecommendedMovie,
      };
    case TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE:
      return {
        ...state,
        isLoadingNowPlayingMovie: !state.isLoadingNowPlayingMovie,
      };

    default:
      return state;
  }
};
export default NewHomePage;
