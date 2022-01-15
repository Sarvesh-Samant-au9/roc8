import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../Common/MovieCard";
import { fetchKnownFor } from "../../redux/actions";
import LoadingSpinner from "../Common/LoadingSpinner";
import DataNotFound from "../Common/DataNotFound";
import React, { useEffect } from "react";

const KnownForMovie = (props) => {
  const { knownFor, isLoadingKnownFor } = useSelector((state) => state.Person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchKnownFor(props.person_id));
  }, []);
  return knownFor ? (
    <div className="container-fluid mt-4">
      {knownFor.length > 0 && (
        <>
          <h2 className="font-weight-bolder ml-4 heading_color">
            Known For Movie
          </h2>
          <div className="row text-center">
            {knownFor.map((movie, idx) => {
              return <MovieCard data={movie} key={idx} show_wishlist={true} />;
            })}
          </div>
        </>
      )}
    </div>
  ) : isLoadingKnownFor ? (
    <LoadingSpinner />
  ) : (
    <DataNotFound />
  );
};

export default KnownForMovie;
