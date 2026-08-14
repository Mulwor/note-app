import React, { useState, useEffect } from "react";
const API_URL = "https://test.com";

export function SearchResult() {
  const [searchParam, setSearchParam] = useState(null);
  const [dropdownArr, setDropdownArr] = useState(null);
  const inputRef = useRef(null);

  const fetchData = (searchParam) =>
    fetch(`${API_URL}?s=${searchParams}`)
      .then((response) => response.json())
      .then((data) => setDropdownArr(data))
      .catch((error) => console.log(error));

  const onChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input onChange={onChange} ref={inputRef} />
      <select>
        {dropdownArr.map((item, index) => {
          <option key={`${index}_result_data`}>{item}</option>;
        })}
      </select>
    </div>
  );
}