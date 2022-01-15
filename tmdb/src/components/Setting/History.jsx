import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Common/MovieCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiKey } from "../../redux/config";
const api_key = `api_key=${apiKey}`;
const base_url = "https://api.themoviedb.org/3/movie/";

const History = () => {
  const [list, setList] = useState([]);
  const { user, userDetail } = useSelector((state) => state.UserAuth);
  const fetchMovieDataList = async (list) => {
    const { data } = await list.forEach((id) => {
      axios.get(`${base_url}${id}?${api_key}&language=en-US`);
    });
    setList([...list, data]);
  };
  useEffect(() => {
    if (user) {
      // fetchMovieDataList(userDetail.history);
    }
  }, []);
  return (
    <div className="card setting_common_card mb-5">
      <h2 className="card-header">History</h2>
      {user ? (
        list.length > 0 ? (
          <h3>History Feature Will Soon be Added</h3>
        ) : (
          // <div
          //   className="card-body d-flex flex-row flex-wrap justify-content-start"
          //   style={{ padding: 0 }}
          // >
          //   {list.map((movie) => {
          //     return (
          //       <MovieCard key={movie.id} data={movie} show_delete={true} />
          //     );
          //   })}
          // </div>
          <div
            className="card-body d-flex flex-row flex-wrap justify-content-center align-items-center"
            style={{ padding: 0, height: "200px" }}
          >
            <h3>History Feature Will Soon be Added</h3>
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
  );
};

export default History;
