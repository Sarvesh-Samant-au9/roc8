import { NavLink, useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Theme from "./Theme";
import History from "./History";
import Profile from "./Profile";
import Wishlist from "./Wishlist";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";
import PageNotFound from "../Common/PageNotFound";

import "../../css/Setting.css";
const Setting = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserAuth);
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  const paramsType = ["theme", "history", "profile", "wishlist"];

  if (paramsType.includes(props.match.params.type)) {
    return (
      <div className="container-fluid setting">
        <div className="row">
          <Fade left>
            <div className="col-12 col-md-2 hide_on_mobile">
              <div className="card setting_card">
                <div className="card-header">
                  <h5>Settings</h5>
                </div>
                <div className="card-body">
                  {user && (
                    <p>
                      <NavLink
                        to="/setting/profile"
                        activeClassName="navlink_active"
                      >
                        Profile Details
                      </NavLink>
                    </p>
                  )}
                  <p>
                    <NavLink
                      to="/setting/theme"
                      activeClassName="navlink_active"
                    >
                      Change Theme
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/setting/history"
                      activeClassName="navlink_active"
                    >
                      View History
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/setting/wishlist"
                      activeClassName="navlink_active"
                    >
                      View Wishlist
                    </NavLink>
                  </p>
                  {user && (
                    <p
                      className="font-weight-bold"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Log out
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Fade>
          <div className="col-12 col-md-10">
            {props.match.params.type === "theme" && <Theme />}
            {props.match.params.type === "history" && <History />}
            {props.match.params.type === "profile" && <Profile />}
            {props.match.params.type === "wishlist" && <Wishlist />}
          </div>
        </div>
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};

export default Setting;
