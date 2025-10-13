import React, { useEffect, useState } from 'react';

export const Count2 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('componentWillUnmount');
      clearInterval(interval);
    };
  }, []);

  return <div>{number} clean</div>;
};
