import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateProfileData } from "../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const url =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";

const Profile = (props) => {
  const [genreList, setGenreList] = useState([]);
  const [selectedGenreList, setSelectedGenreList] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user, userDetail } = useSelector((state) => state.UserAuth);
  const getData = async () => {
    const { data } = await axios.get(url);
    setGenreList(data.genres);
  };

  useEffect(() => {
    getData();
    if (userDetail) {
      if (userDetail.name) {
        setName(userDetail.name);
      }
      if (userDetail.fav_genres) {
        setSelectedGenreList(userDetail.fav_genres);
      }
    }
  }, []);

  const genreHandler = (e) => {
    let id = parseInt(e.target.id);
    if (selectedGenreList.length === 1 && selectedGenreList.includes(id)) {
      toast.error("Alteast one genre should be selected", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      selectedGenreList.length < 3 &&
      !selectedGenreList.includes(id)
    ) {
      setSelectedGenreList([...selectedGenreList, id]);
    } else if (selectedGenreList.includes(id)) {
      let idx = selectedGenreList.indexOf(id);
      setSelectedGenreList([
        ...selectedGenreList.slice(0, idx),
        ...selectedGenreList.slice(idx + 1),
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileData(props.user, name, selectedGenreList));
    setLoading(true);
    closeLoaderIn5Seconds();
    toast.dark("Profile details updated", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const closeLoaderIn5Seconds = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const renderGenre = () => {
    return genreList.map((genre) => {
      if (selectedGenreList.includes(genre.id)) {
        return (
          <input
            type="button"
            className="btn m-2 active_genre"
            key={genre.id}
            id={genre.id}
            value={genre.name}
            onClick={genreHandler}
          />
        );
      } else {
        return (
          <input
            type="button"
            className="btn m-2 inactive_genre"
            key={genre.id}
            id={genre.id}
            value={genre.name}
            onClick={genreHandler}
          />
        );
      }
    });
  };
  if (user) {
    return (
      <div className="card setting_common_card mb-5">
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h2 className="card-header">Profile details</h2>
        <div className="card-body">
          <Zoom>
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-12">
                <h4>Personal Details</h4>
              </div>
              <div className="form-group col-12 col-md-6">
                <label>Full Name</label>
                <input
                  className="form-control"
                  name="full_name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="form-group col-12 col-md-6">
                <label>Email id</label>
                <input
                  className="form-control"
                  name="emailid"
                  value={user.email}
                  type="email"
                  readOnly
                  required
                />
              </div>
              <div className="col-12">
                <h4>
                  Favourite genres{" "}
                  <small className="text-danger" style={{ fontSize: "15px" }}>
                    (Max 1 to 3)
                  </small>
                </h4>
              </div>
              <div className="form-group col-12">{renderGenre()}</div>
              <div className="form-group col-12">
                {loading ? (
                  <button class="btn btn-primary" type="button" disabled>
                    <span
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                )}
              </div>
            </form>
          </Zoom>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/auth/login"></Redirect>;
  }
};

export default Profile;

