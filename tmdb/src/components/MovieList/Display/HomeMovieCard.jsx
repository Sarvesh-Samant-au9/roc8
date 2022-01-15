import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import ReactTooltip from "react-tooltip";
import ReactStars from "react-rating-stars-component";
import "../../../css/HomeMovieCard.css";
const DisplayNowPlaying = (props) => {
  const img_src = () => {
    if (props.data.poster_path === null) {
      return "../demo.png";
    } else {
      return `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
    }
  };
  return (
    <Zoom>
      <div className="movie-outer2-card text-center">
        <div className="movie-inner-card">
          <div className="position-relative card-shadow">
            <Link to={`/movie/${props.data.id}`}>
              <img src={img_src()} alt="movie" />
              <div className="movie-card-text">
                <h6>{props.data.title}</h6>
              </div>
              <div
                className="d-flex justify-content-center"
                data-tip={`Rating based on ${props.data.vote_count} votes`}
              >
                <ReactStars
                  count={5}
                  value={props.data.vote_average / 2}
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
              {/* <ReactTooltip
                place="bottom"
                border={true}
                borderColor="#000"
                backgroundColor="#fff"
                textColor="#000"
                effect="solid"
              /> */}
            </Link>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default DisplayNowPlaying;
