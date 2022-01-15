import React, { useState } from "react";

const Rating = (props) => {
  const [rating, setRatings] = useState("");

  const setRatingsForApi = (e) => {
    setRatings(e.target.value);
    props.ratingDataProp(e.target.value);
  };

  return (
    <div>
      <h6>Select min. rating</h6>
      <select
        className="form-control"
        onChange={setRatingsForApi}
        value={rating}
      >
        <option value="">Choose Rating</option>
        <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
        <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
        <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
        <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
        <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
      </select>
    </div>
  );
};
export default Rating;
