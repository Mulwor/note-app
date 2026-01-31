import { useState, useEffect, useLayoutEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  console.log(1);

  useEffect(() => {
    console.log(2);

    return () => {
      console.log(3);
    };
  }, [count]);

  useEffect(() => {
    console.log(4);
    setCount((count) => count + 1);
  }, []);

  return <Child count={count} />;
}

export default App

function Child({ count }) {
  useEffect(() => {
    console.log(5);

    return () => {
      console.log(6);
    };
  }, [count]);

  return "Logs3";
}