import React, { useEffect } from "react";
import ReviewData from "./ReviewData";
import Slider from "react-slick";
import { connect, useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../Common/LoadingSpinner";
import DataNotFound from "../../Common/DataNotFound";
import { fetchReviewsList } from "../../../redux/actions";

const Review = ({ movie_id }) => {
  useEffect(() => {
    dispatch(fetchReviewsList(movie_id));
  }, []);
  const { reviewsList, isLoadingReviewsList } = useSelector(
    (state) => state.IndividualMovieDetail
  );
  const dispatch = useDispatch();

  let settings = {
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };
  if (reviewsList) {
    return (
      <div className="other_data container review_container">
        <h1 className="text-center font-weight-bolder heading_color">Review</h1>
        <hr />
        {reviewsList.total_results ? (
          <Slider {...settings}>
            {reviewsList.results.map((review, idx) => {
              return (
                <ReviewData
                  data={review}
                  key={idx}
                  active={idx === 0 && "active"}
                />
              );
            })}
          </Slider>
        ) : (
          <h1 className="text-center">
            <i>No reviews available</i>
          </h1>
        )}
      </div>
    );
  } else if (isLoadingReviewsList) {
    return <LoadingSpinner />;
  } else {
    return <DataNotFound />;
  }
};

export default Review;
