import React from "react";
import { useDispatch } from "react-redux";
import { fetchDiscoverMovieList } from "../../../redux/actions";
const DiscoverMovie = () => {
  const dispatch = useDispatch();
  const renderFilterMovie = (e) => {
    dispatch(fetchDiscoverMovieList(e.target.value, 1));
  };
  const discoverOption = () => {
    return (
      <>
        <h6>Choose any one option</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            id="top_rated"
            onClick={renderFilterMovie}
            type="radio"
            name="discover_movie"
            value="top_rated"
          />
          <label htmlFor="top_rated" className="form-check-label">
            Top Rated
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="popular"
            onClick={renderFilterMovie}
            type="radio"
            name="discover_movie"
            value="popular"
          />
          <label htmlFor="popular" className="form-check-label">
            Popular
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="upcoming"
            onClick={renderFilterMovie}
            type="radio"
            name="discover_movie"
            value="upcoming"
          />
          <label htmlFor="upcoming" className="form-check-label">
            Upcoming
          </label>
        </div>
      </>
    );
  };
  return (
    <div className="filter-card">
      <div className="card">
        <div className="card-header">
          <a
            className="cast-name collapsed text-dark "
            href="#collapseTwo"
            role="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h6 className="text-center" style={{ margin: 0 }}>
              Discover Movie By&emsp;
              <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
            </h6>
          </a>
        </div>
        <div
          id="collapseTwo"
          className="collapse show card-body"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          {discoverOption()}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMovie;
