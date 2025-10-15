import React, { useEffect, useState } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
};

export default Counter2;
