import { Link, useHistory } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import ReactTooltip from "react-tooltip";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist, updateHistory } from "../../redux/actions";
import "../../css/MovieCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, userDetail } = useSelector((state) => state.UserAuth);
  const img_src = () => {
    if (props?.data?.poster_path === null) {
      return "../demo.png";
    } else {
      return `https://image.tmdb.org/t/p/w500/${props?.data?.poster_path}`;
    }
  };
  const style = {
    height: props?.height_s,
  };
  const addWishlist = () => {
    if (user) {
      dispatch(updateWishlist(user, [userDetail?.wishlist, props?.data.id]));
      toast.dark("Movie added to wishlist", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      history.push("/auth/login");
    }
  };
  const removeWishlist = () => {
    let newList = userDetail.wishlist.filter((item) => item !== props?.data.id);
    dispatch(updateWishlist(user, newList));
    toast.error("Movie removed from wishlist", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const removeHistory = () => {
    let newList = userDetail.history.filter((item) => item !== props?.data.id);
    dispatch(updateHistory(user, newList));
    toast.dark("Movie removed from history", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const renderWishlistOption = () => {
    if (userDetail && userDetail.wishlist?.includes(props?.data.id)) {
      return (
        <div
          className="wishlist_show"
          data-tip="Remove movie from wishlist"
          data-for="wishlist"
          onClick={removeWishlist}
        >
          <i className="fa fa-heart text-danger" aria-hidden="true"></i>
        </div>
      );
    } else {
      return (
        <div
          className="wishlist_show"
          onClick={addWishlist}
          data-tip="Add movie to wishlist"
          data-for={`wishlist-${props?.data?.id}`}
        >
          <i
            className="fa fa-heart-o text-danger"
            aria-hidden="true"
            style={{ fontWeight: "800" }}
          ></i>
        </div>
      );
    }
  };
  return (
    <Zoom>
      <ToastContainer />
      <div className="movie-outer-card text-center">
        <div className="movie-inner-card">
          <div className="position-relative card-shadow">
            <Link to={`/movie/${props?.data?.id}`}>
              <img src={img_src()} alt="movie" style={style} />
              <div className="movie-card-text">
                <h6>{props?.data.title}</h6>
              </div>
              <div
                className="d-flex justify-content-center"
                data-tip={`Rating based on ${props?.data.vote_count} votes`}
                data-for={`movie-${props?.data?.id}`}
              >
                <ReactStars
                  count={5}
                  value={props?.data.vote_average / 2}
                  edit={false}
                  size={25}
                  isHalf={true}
                  color="#585555"
                  emptyIcon={<i className="fa fa-star-o"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#F9A825"
                />
              </div>
              <ReactTooltip
                id={`movie-${props?.data?.id}`}
                place="top"
                border={true}
                borderColor="#000"
                backgroundColor="#fff"
                textColor="#000"
                effect="solid"
              />
              <ReactTooltip
                id={`wishlist-${props?.data?.id}`}
                place="left"
                border={true}
                borderColor="#000"
                backgroundColor="#fff"
                textColor="#000"
                effect="solid"
              />
            </Link>
            {/* {props?.show_wishlist && renderWishlistOption()}
            {props?.show_delete && (
              <div
                className="wishlist_show"
                onClick={removeHistory}
                data-tip="Remove movie from history"
                data-for="wishlist"
              >
                <i className="fa fa-trash text-danger" aria-hidden="true"></i>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default MovieCard;
