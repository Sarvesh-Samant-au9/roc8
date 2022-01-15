import React, { useEffect } from "react";
import DisplayTrailer from "../Display/DisplayTrailer";
import { fetchNowPlayingMovieList } from "../../../redux/actions";
import LoadingSpinner from "../../Common/LoadingSpinner";
import "../../../css/Trailer.css";
import { useDispatch, useSelector } from "react-redux";
const Trailer = (props) => {
  const dispatch = useDispatch();
  const { nowPlayingMovie } = useSelector((state) => state.NewHomePage);
  useEffect(() => {
    dispatch(fetchNowPlayingMovieList());
  }, [dispatch]);
  if (nowPlayingMovie) {
    return (
      <div className="container pt-5 pb-5 justify-content-center align-items-center d-flex">
        <DisplayTrailer data={nowPlayingMovie[0]} />
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
};
export default Trailer;
