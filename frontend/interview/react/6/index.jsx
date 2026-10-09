import React, { useState } from "react";

// чему будет равен count после 1 клика
// выведется ли в консоль Count-render после клика / если да, то как этого избежать

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>App1</h1>
      <div>{count}</div>
      <button onClick={onClick}>increment</button>

      <Count onClick={onClick} />
    </div>
  );
};

export const Count = () => {
  console.log("Count-render");

  return <div>Count component</div>;
};
