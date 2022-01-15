import React, { useState } from "react";

const curr_data = new Date();
const curr_year = curr_data.getFullYear();

const Year = (props) => {
  const [year, changeYear] = useState("");
  const [isError, changeError] = useState(false);

  const sendData = (e) => {
    let value = parseInt(e.target.value);
    if (value <= curr_year && value >= 1900) {
      changeError(false);
      changeYear(value);
      props.yearDataProp(value);
    } else if (e.target.value === "") {
      changeError(false);
      changeYear(e.target.value);
      props.yearDataProp(e.target.value);
    } else if (value < curr_year) {
      changeYear(value);
      changeError(true);
    }
  };

  return (
    <div>
      <h6>Select min. year</h6>
      <input
        className="form-control"
        onChange={sendData}
        type="number"
        minLength="4"
        maxLength="4"
        min="1900"
        max={curr_year}
        step="1"
        value={year}
      />
      {isError && (
        <label>
          <span className="text-danger">
            Year should be between 1900 - {curr_year}
          </span>
        </label>
      )}
    </div>
  );
};

export default Year;
