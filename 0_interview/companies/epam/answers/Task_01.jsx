import React, { useState, useEffect } from "react";
const API_URL = "https://test.com";

export function SearchResult() {
  const [searchParam, setSearchParam] = useState(null);
  const [dropdownArr, setDropdownArr] = useState(null);

  const fetchData = (searchParam) =>
    fetch(`${API_URL}?s=${searchParams}`)
      .then((response) => response.json())
      .then((data) => setDropdownArr(data))
      .catch((error) => console.log(error));

  const onChange = (event) => {
    setSearchParam(event.target.value);
  };

  return (
    <div>
      <input onChange={onChange} />
      <select>
        {dropdownArr.map((item, index) => {
          <option key={`${index}_result_data`}>{item}</option>;
        })}
      </select>
    </div>
  );
}