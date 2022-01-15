import ReactStars from "react-rating-stars-component";
const ReviewData = (props) => {
  const img_src = () => {
    if (props.data.author_details.avatar_path === null) {
      return "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png";
    } else if (props.data.author_details.avatar_path.includes("http")) {
      return props.data.author_details.avatar_path.slice(1);
    } else {
      return `https://image.tmdb.org/t/p/w500${props.data.author_details.avatar_path}`;
    }
  };
  return (
    <>
      <div className="d-flex mb-4 mt-2 justify-content-center">
        <img
          src={img_src()}
          alt="review_person"
          width="50"
          height="50"
          className="rounded-circle mr-3"
        />
        <div className="mr-3">
          <h6 className="text-uppercase">{props.data.author}</h6>
          <div className="d-flex justify-content-center align-items-center">
            <span className="mt-1">{props.data.created_at.slice(0, 10)}</span>
            <ReactStars
              count={5}
              value={props.data.author_details.rating / 2}
              edit={false}
              size={20}
              isHalf={true}
              emptyIcon={<i className="fa fa-star-o"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
      <span style={{ fontSize: "20px" }}>
        <i className="fa fa-quote-left heading_color" aria-hidden="true"></i>
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <p
          style={{
            maxHeight: "150px",
            overflowY: "hidden",
            width: "95%",
          }}
          className="text-center"
        >
          &emsp;{props.data.content}&emsp;
        </p>
      </div>
      <span style={{ fontSize: "20px", float: "right" }}>
        <i className="fa fa-quote-right heading_color" aria-hidden="true"></i>
      </span>
    </>
  );
};
export default ReviewData;
