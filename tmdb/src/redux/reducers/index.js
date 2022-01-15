import { combineReducers } from "redux";
import IndividualMovieDetail from "./IndividualMovieDetail";
import Search from "./Search";
import HomeMovie from "./HomeMovie";
import Person from "./Person";
import UserAuth from "./UserAuth";
import NewHomePage from "./NewHomePage";

const rootReducer = combineReducers({
  IndividualMovieDetail,
  Search,
  HomeMovie,
  Person,
  UserAuth,
  NewHomePage,
});

export default rootReducer;
