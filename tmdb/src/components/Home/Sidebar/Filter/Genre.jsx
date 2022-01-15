import React, { useState, useEffect } from "react";

import axios from "axios";
const url =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
const Genre = (props) => {
  const [genre, setGenre] = useState("");
  const [genreList, setGenreList] = useState([]);
  const genreSelect = (e) => {
    setGenre(e.target.value);
    props.genreDataProp(e.target.value);
  };
  const getDataFromApi = async () => {
    const { data } = await axios.get(url);
    setGenreList(data.genres);
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <div>
      <h6>Choose genre</h6>
      <select className="form-control" value={genre} onChange={genreSelect}>
        <option value="">Select Genre</option>
        {genreList &&
          genreList.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Genre;
