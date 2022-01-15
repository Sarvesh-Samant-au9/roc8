import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchSearchSuggestion,
  emptySearchSuggestion,
  fetchSearchResults,
} from "../../redux/actions";
import { useHistory } from "react-router-dom";
import SearchSuggestion from "./SearchSuggestion";
import "../../css/searchFunction.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const history = useHistory();
  // fetchSearchSuggestion, emptySearchSuggestion
  const handleChange = (data) => {
    // console.log(data);
    setKeyword(data);
    if (data) {
      dispatch(fetchSearchSuggestion(data));
    } else {
      dispatch(emptySearchSuggestion());
    }
  };

  const redirect = (e) => {
    e.preventDefault();
    if (keyword) {
      dispatch(emptySearchSuggestion());
      history.push(`/search/${keyword}`);
    }
  };
  return (
    <form className="my-auto w-100 d-inline-block searchBox">
      <div className="input-group">
        <input
          type="search"
          id="myInput"
          list="match-list"
          className="form-control"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search movie/actor"
          aria-label="Search movie/actor"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button onClick={redirect} className="btn" type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <SearchSuggestion />
      </div>
    </form>
  );
};

export default SearchBar;
