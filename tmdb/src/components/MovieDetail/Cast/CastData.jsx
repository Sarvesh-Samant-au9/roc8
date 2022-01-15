import { Link } from "react-router-dom";
const ReviewData = (props) => {
  const img_src = () => {
    if (props.data.profile_path === null) {
      return "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png";
    } else {
      return `https://image.tmdb.org/t/p/w500${props.data.profile_path}`;
    }
  };
  return (
    <center>
      <Link to={`/person/${props.data.id}`} className="cast-name">
        <img src={img_src()} alt="cast" className="rounded-circle" />
        <small>{props.data.name}</small>
      </Link>
    </center>
  );
};
export default ReviewData;
