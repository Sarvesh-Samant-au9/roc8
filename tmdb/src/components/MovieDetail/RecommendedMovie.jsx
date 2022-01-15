import React, { useEffect } from "react";
import MovieCard from "../Common/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Common/LoadingSpinner";
import DataNotFound from "../Common/DataNotFound";
import { fetchRecMoviesList } from "../../redux/actions";
import NoMovies from "../Common/NoMovies";

const RecommendedMovie = ({ movie_id }) => {
  const { recommendMovieList, isLoadingrecommendMovieList } = useSelector(
    (state) => state.IndividualMovieDetail
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecMoviesList(movie_id));
  }, []);

  const renderData = (data) => {
    if (data.total_results) {
      return (
        <div className="row mx-auto text-center">
          {data.results.map((movie, idx) => {
            return (
              <MovieCard
                data={movie}
                key={idx}
                show_wishlist={true}
                isRecommend={true}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <h1 className="text-center">
          <i>No Recommended Movies available</i>
        </h1>
      );
    }
  };
  if (recommendMovieList) {
    return (
      <div className="container-fluid mx-auto mt-4">
        <h2> Recommended Movie</h2>
        {renderData(recommendMovieList)}
      </div>
    );
  } else if (isLoadingrecommendMovieList) {
    return <LoadingSpinner />;
  } else {
    return <DataNotFound />;
  }
};

export default RecommendedMovie;
