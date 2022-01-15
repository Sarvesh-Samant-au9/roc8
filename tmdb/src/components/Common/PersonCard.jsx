import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../../css/MovieCard.css";
import "../../css/PersonCard.css";
const PersonCard = (props) => {
  // console.log(props, "Person Card");
  const img_src = () => {
    if (props.data.profile_path === null) {
      return "https://dl.dropboxusercontent.com/s/yes3bkjzwczt5cz/actor.png?dl=0";
    } else {
      return `https://image.tmdb.org/t/p/w500${props.data.profile_path}`;
    }
  };
  const style = {
    height: props.height_s,
  };
  return (
    <Fade bottom>
      <div className="movie-outer-card text-center">
        <div className="movie-inner-card">
          <div className="person-card-shadow">
            <Link to={`/person/${props.data.id}`}>
              <img src={img_src()} alt="movie" style={style} />
              <div
                className="movie-card-text"
                // style={{ height: '50px' }}
              >
                <h6 className="mr-2">{props.data.name}</h6>
              </div>
              <div className="p-1 d-flex justify-content-around">
                <div className="person-other-data">
                  <span className="heading_color font-weight-bold">Gender</span>
                  <span className="text-dark">
                    {props.data.gender === 2 ? "Male" : "Female"}
                  </span>
                </div>
                <div className="person-other-data">
                  <span className="heading_color font-weight-bold">
                    Department
                  </span>
                  <span className="text-dark">
                    {props.data.known_for_department}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PersonCard;
