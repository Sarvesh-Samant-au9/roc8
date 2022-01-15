import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import MovieCard from "../Common/MovieCard";
import Sidebar from "./Sidebar/Index";
import { fetchDiscoverMovieList } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../Common/LoadingSpinner";
import DataNotFound from "../Common/DataNotFound";
import DisplayPagination from "./Pagination/DisplayPagination";
import NoMovies from "../Common/NoMovies";

const Home = () => {
  const dispatch = useDispatch();
  const { movieList, isLoadingMovieList } = useSelector(
    (state) => state.HomeMovie
  );
  // console.log(props, movieList, isLoadingMovieList);

  useEffect(() => {
    dispatch(fetchDiscoverMovieList("popular", 1));
  }, [dispatch]);

  const renderMovieList = ({ movieList, isLoadingMovieList }) => {
    // console.log(props, movieList, isLoadingMovieList);
    if (movieList) {
      if (movieList.length > 0) {
        return movieList.map((movie, idx) => {
          // console.log(movieList);
          return (
            <MovieCard
              data={movie}
              key={idx}
              height_s="300px"
              show_wishlist={true}
            />
          );
        });
      } else {
        return <NoMovies />;
      }
    } else if (isLoadingMovieList) {
      return <LoadingSpinner />;
    } else {
      return <DataNotFound />;
    }
  };
  const renderPagination = ({ movieList, isLoadingMovieList }) => {
    if (movieList) {
      if (movieList.length > 0) {
        return <DisplayPagination />;
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <Fade left>
          <div className="col-md-3 col-lg-2 col-12" id="accordion">
            <Sidebar />
          </div>
        </Fade>
        <div className="col-md-9 col-lg-10 mx-auto col-12 container-fluid d-flex flex-row flex-wrap justify-content-center">
          {renderMovieList({ movieList, isLoadingMovieList })}
        </div>
        <div className="col-md-12 d-flex flex-row justify-content-center mt-1">
          {renderPagination({ movieList, isLoadingMovieList })}
        </div>
      </div>
    </div>
  );
};

export default Home;
