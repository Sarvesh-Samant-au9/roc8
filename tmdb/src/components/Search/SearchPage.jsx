import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../Common/LoadingSpinner";
import DataNotFound from "../Common/DataNotFound";
import { fetchSearchResults } from "../../redux/actions";

const SearchPage = (props) => {
  const [movieState, setMovieState] = useState("movie");
  const dispatch = useDispatch();
  const { searchResults, isLoadingSearchResults } = useSelector(
    (state) => state.Search
  );
  useEffect(() => {
    dispatch(fetchSearchResults(props.keyword.match.params.str));
  }, []);
  // console.log(movieState);
  return searchResults ? (
    <div className="container-fluid">
      <div className="search-option">
        <h2>Search type</h2>
        <button
          onClick={() => {
            setMovieState("movie");
          }}
          className={movieState === "movie" ? "btn-active" : "btn-inactive"}
        >
          Movies
        </button>
        <button
          onClick={() => {
            setMovieState("person");
          }}
          className={movieState === "person" ? "btn-active" : "btn-inactive"}
        >
          Actor
        </button>
      </div>
      {searchResults.total_results > 0 ? (
        <SearchCard list={searchResults.results} type={movieState} />
      ) : (
        <div>
          <h1>No movie or actor found</h1>
        </div>
      )}
    </div>
  ) : (
    <>{isLoadingSearchResults ? <LoadingSpinner /> : <DataNotFound />}</>
  );
};

export default SearchPage;
