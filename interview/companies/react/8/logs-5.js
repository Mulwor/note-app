
// Что выводится после чего и почему

import { useState, useEffect, useLayoutEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function clickHandler() {
    setNum((prev) => prev + 1);
  }

  console.log('App render');

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return () => {
      console.log('cleanup useLayoutEffect');
    };
  }, [num]);

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('cleanup useEffect');
    };
  }, [num]);

  return (
    <>
      <button onClick={clickHandler}>render</button>
      <div style={{ fontSize: "45px", textAlign: "center" }}>{num}</div>
    </>
  );
};

export default App;