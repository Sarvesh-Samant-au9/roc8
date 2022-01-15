import React, { useEffect, useState } from "react";
import MovieCard from "../Common/MovieCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiKey } from "../../redux/config";
const api_key = `api_key=${apiKey}`;
const base_url = "https://api.themoviedb.org/3/movie/";

const Wishlist = () => {
  const [list, setList] = useState([]);
  const fetchDataList = async (list) => {
    const data = await list?.forEach((id) => {
      axios.get(`${base_url}${id}?${api_key}&language=en-US`);
    });
    // console.log(data);
    setList([data]);
  };
  const { user, userDetail } = useSelector((state) => state.UserAuth);
  // console.log(userDetail);
  useEffect(() => {
    // console.log(userDetail);
    if (user) {
      fetchDataList(userDetail);
    }
  }, []);

  return (
    <div>
      <div className="card setting_common_card mb-5">
        <h2 className="card-header">Wishlist</h2>
        {user ? (
          list.length > 0 ? (
            <div className="card-body d-flex flex-row flex-wrap justify-content-start">
              {/* {console.log(list)} */}
              {
                list && <h3>WishList Feature Will Soon be Added</h3>

                // list.map((movie) => {
                //   return (
                //     <MovieCard
                //       key={movie.id}
                //       data={movie}
                //       show_wishlist={true}
                //     />
                //   );
                // })
              }
            </div>
          ) : (
            <div
              className="card-body d-flex flex-row flex-wrap justify-content-center align-items-center"
              style={{ padding: 0, height: "200px" }}
            >
              <h1>No movie saved in wishlist</h1>
            </div>
          )
        ) : (
          <div
            className="card-body d-flex flex-column justify-content-center align-items-center"
            style={{ padding: 0, height: "200px" }}
          >
            <h2 className="text-center">
              You need to Login/Signup first to see your history
            </h2>
            <Link to="/auth/login" className="mt-4">
              <h4>Click to Login/Signup</h4>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
