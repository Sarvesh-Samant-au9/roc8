import React, { useState } from "react";
import FilterGenre from "./Filter/Genre";
import FilterYear from "./Filter/Year";
import FilterRating from "./Filter/Rating";
import SortByType from "./Sort/Type";
import { useDispatch } from "react-redux";
import { fetchFilterMovieList } from "../../../redux/actions";

const SortFilter = () => {
  const [genre, setGenre] = useState([]);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();

  // Get Sorting Related Data
  const setStateParameter = () => {
    let searchParams = "";
    if (type) {
      searchParams = `&sort_by=${type}&include_adult=false&include_video=false`;
    } else {
      searchParams =
        "&sort_by=popularity.desc&include_adult=false&include_video=false";
    }
    if (year) {
      searchParams = `${searchParams}&primary_release_year=${year}`;
    }
    if (genre) {
      searchParams = `${searchParams}&with_genres=${genre}`;
    }
    if (rating) {
      searchParams = `${searchParams}&vote_average.gte=${rating}`;
    }
    // console.log(searchParams);
    dispatch(fetchFilterMovieList(searchParams, 1));
  };

  const filterOption = () => {
    return (
      <>
        <div className="col-6 col-md-12">
          <FilterGenre genreDataProp={(data) => setGenre(data)} />
        </div>
        <div className="col-6 col-md-12">
          <FilterYear yearDataProp={(data) => setYear(data)} />
        </div>
        <div className="col-6 col-md-12">
          <SortByType typeDataProp={(data) => setType(data)} />
        </div>
        <div className="col-6 col-md-12">
          <FilterRating ratingDataProp={(data) => setRating(data)} />
        </div>
        <div className="col-md-12">
          <button onClick={setStateParameter} className="btn btn-block mt-4">
            Submit
          </button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="filter-card">
        <div className="card">
          <div className="card-header">
            <a
              className="cast-name collapsed text-dark"
              href="#collapseOne"
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h6 className="text-center" style={{ margin: 0 }}>
                Filter Movie List &emsp;
                <i className="fa fa-filter" aria-hidden="true"></i>
              </h6>
            </a>
          </div>
          <div
            id="collapseOne"
            className="row collapse card-body"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            {filterOption()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
