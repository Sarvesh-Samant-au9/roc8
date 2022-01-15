import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptySearchSuggestion } from "../../redux/actions";

const SearchSuggestion = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectMovie = (e) => {
    dispatch(emptySearchSuggestion());
    history.push(`/movie/${e.target.id}`);
  };
  const { searchSuggestion, isLoadingSearchSuggestion } = useSelector(
    (state) => state.Search
  );
  if (searchSuggestion) {
    return (
      <div className="searchResult" id="match-list">
        {searchSuggestion.results.map((suggestion, idx) => {
          return (
            <div onClick={redirectMovie} id={suggestion.id} key={idx}>
              {suggestion.title}
            </div>
          );
        })}
      </div>
    );
  } else if (isLoadingSearchSuggestion) {
    return (
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SearchSuggestion;
