// зарефакторить код

import React, { useState } from "react";

const fetchNumber = () => Promise.resolve(Math.random()); // имитация бэкенд запроса

const heavyFunc = () => {
  // имитация тяжелой функции
  return Math.random();
};

const App = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  const [data, setData] = useState(heavyFunc());

  React.useEffect(async () => {
    setNumber(await fetchNumber());

    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  return (
    <div>
      <div>{number}</div>
      <div>{scroll}</div>

      {[1, 2, 3, 4].map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
};

export default App;
