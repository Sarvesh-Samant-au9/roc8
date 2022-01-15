import React, { useState } from "react";

const Type = (props) => {
  const [type, changeType] = useState("");

  const SendSort = (e) => {
    changeType(e.target.value);
    props.typeDataProp(e.target.value);
  };

  return (
    <div>
      <h6>Select sort type</h6>
      <select className="form-control" onChange={SendSort} value={type}>
        <option value="">Choose Type</option>
        <option value="popularity.desc">Popularity desc</option>
        <option value="popularity.asc">Popularity asc</option>
        <option value="release_date.desc">Release date desc</option>
        <option value="release_date.asc">Release date asc</option>
        <option value="vote_average.asc">Vote average asc</option>
        <option value="vote_average.desc">Vote average desc</option>
      </select>
    </div>
  );
};

export default Type;
