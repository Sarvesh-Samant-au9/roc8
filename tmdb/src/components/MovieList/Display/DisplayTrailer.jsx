import axios from "axios";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
const url = "https://api.themoviedb.org/3/movie";

const DisplayTrailer = (props) => {
  const [key, setKey] = useState(null);
  const getInfo = async () => {
    const { data } = await axios.get(
      `${url}/${props.data.id}/videos?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`
    );
    setKey(data.results[0].key);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <Fade>
      <iframe
        title="trailer"
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        className="trailer"
      ></iframe>
    </Fade>
  );
};

export default DisplayTrailer;
