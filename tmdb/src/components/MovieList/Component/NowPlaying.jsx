import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import DisplayNowPlaying from "../Display/HomeMovieCard";
import { fetchNowPlayingMovieList } from "../../../redux/actions";

const NowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNowPlayingMovieList());
  }, [dispatch]);
  const { nowPlayingMovie } = useSelector((state) => state.NewHomePage);
  const settings = {
    cssEase: "linear",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    nowPlayingMovie && (
      <div className="container-fluid">
        <div className="row">
          <div className="col-11" style={{ margin: "0 auto" }}>
            <h1 className="font-weight-bolder heading_color mt-4 ml-4">
              NOW PLAYING
            </h1>
            <Slider {...settings}>
              {nowPlayingMovie &&
                nowPlayingMovie.map((movie, idx) => {
                  return (
                    <DisplayNowPlaying
                      data={movie}
                      key={idx}
                      height_s="250px"
                      show_wishlist={true}
                    />
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    )
  );
};

export default NowPlaying;
