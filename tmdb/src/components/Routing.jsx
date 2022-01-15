import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Index";
import MovieDetail from "./MovieDetail/Index";
import PersonDetail from "./PersonDetail/Index";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import SearchPage from "./Search/Index";
import Setting from "./Setting/Index";
import Login from "./Auth/Login";
import SignUp from "./Auth/Signup";
import HomePage from "./MovieList/HomePage";
import { auth } from "../redux/Firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser, getUserData, removeUserData } from "../redux/actions";
import PageNotFound from "./Common/PageNotFound";

const Routing = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserAuth);
  const authFunction = (user) => {
    // console.log(user, "Hello Peter 1");
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        // console.log(user, "Hello Peter");
        dispatch(getUserData(user));
      } else {
        dispatch(setUser(null));
        dispatch(removeUserData());
      }
    });
  };
  useEffect(() => {
    authFunction(user);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={MovieDetail} />
        <Route exact path="/person/:id" component={PersonDetail} />
        <Route path="/search/:str" exact component={SearchPage} />
        <Route exact path="/setting/:type" component={Setting} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route path="/movie_list" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
