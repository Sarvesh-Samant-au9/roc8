import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Link, NavLink, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../../css/Header.css";
import { logoutUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.UserAuth);
  const [isShowSearch, toggleSearch] = useState(false);
  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="d-flex flex-grow-1">
          <Link to="/">
            <span className="navbar-brand">
              <img
                src="https://dl.dropboxusercontent.com/s/vx8n6h25qj5dgwn/logo.png?dl=0"
                alt="logo"
                width="55"
              />
            </span>
          </Link>
          <Link
            className="nav-link text-white margin_movie_btn"
            to="/movie_list"
            data-tip="View movie list"
          >
            Movies <i className="fa fa-film" aria-hidden="true"></i>
          </Link>
          <ul className="navbar-nav ml-1 mt-lg-0" style={{ float: "right" }}>
            <li className="nav-item dropdown">
              <button
                className="text-white nav-link show_on_mobile_nav fa_btn"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile{" "}
                <i className="fa fa-user-circle fa_btn" aria-hidden="true"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {user && (
                  <NavLink
                    className="dropdown-item"
                    to="/setting/profile"
                    activeClassName="navlink_active"
                  >
                    User Details
                  </NavLink>
                )}
                <NavLink
                  className="dropdown-item"
                  to="/setting/theme"
                  activeClassName="navlink_active"
                >
                  Change Theme
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/setting/history"
                  activeClassName="navlink_active"
                >
                  View History
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/setting/wishlist"
                  activeClassName="navlink_active"
                >
                  View Wishlist
                </NavLink>
                {user ? (
                  <button
                    className="dropdown-item logout_btn font-weight-bold"
                    onClick={handleLogout}
                  >
                    Log out{" "}
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </button>
                ) : (
                  <NavLink
                    className="dropdown-item logout_btn font-weight-bold"
                    to="/auth/login"
                  >
                    Login/Signup{" "}
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
          <span
            onClick={() => toggleSearch(!isShowSearch)}
            className="nav-link text-white fa_btn show_on_mobile_nav"
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <span className="navbar_web_links">
            <span
              onClick={() => toggleSearch(!isShowSearch)}
              className="nav-link text-white fa_btn"
              data-tip="Search movie/person"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <Link
              className="nav-link text-white fa_btn"
              to="/setting/theme"
              data-tip="Change color theme"
            >
              <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
            </Link>
            {user ? (
              <>
                <Link
                  className="nav-link text-white fa_btn"
                  to="/setting/wishlist"
                  data-tip="View wishlist"
                >
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </Link>
                <Link
                  className="nav-link text-white fa_btn"
                  to="/setting/history"
                  data-tip="View history"
                >
                  <i className="fa fa-history" aria-hidden="true"></i>
                </Link>
                <Link
                  className="nav-link text-white fa_btn"
                  to="/setting/profile"
                  data-tip="View user details"
                >
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </Link>
                <span
                  className="nav-link text-white fa_btn"
                  onClick={handleLogout}
                >
                  Logout &nbsp;
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </span>
              </>
            ) : (
              <Link className="nav-link text-white fa_btn" to="/auth/login">
                Log In / Sign Up
              </Link>
            )}
          </span>
        </div>
      </nav>
      {isShowSearch && <SearchBar isShow="none" />}
      <ReactTooltip
        place="bottom"
        border={true}
        // borderColor="#000000"
        // backgroundColor="#ffffff"
        // textColor="#000"
        effect="solid"
        arrowColor="pink"
        type="dark"
      />
    </>
  );
};

export default Header;
