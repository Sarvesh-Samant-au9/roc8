import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import HomeMovieCard from "../Display/HomeMovieCard";
import { fetchTrendingMovieList } from "../../../redux/actions";

const Recommended = () => {
  const { trendingMovie } = useSelector((state) => state.NewHomePage);
  const [genreState, setGenreState] = useState([28]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingMovieList("day"));
  }, [dispatch]);
  let settings = {
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
    <div>
      {trendingMovie && (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 mx-auto">
                <h2 className="font-weight-bolder mt-4 mx-auto">RECOMMENDED</h2>
                <Slider {...settings}>
                  {trendingMovie &&
                    trendingMovie.map((movie, idx) => {
                      let count = 0;
                      for (let i = 0; i <= genreState.length; i++) {
                        if (movie.genre_ids.includes(genreState[i])) {
                          count++;
                        }
                      }
                      if (count === genreState.length) {
                        return <HomeMovieCard data={movie} key={idx} />;
                      }
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Recommended;
