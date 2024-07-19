import React, { useCallback, useLayoutEffect, useState } from 'react';

const PleaseReviewMe = () => {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([{ id: 1 }]);

  useLayoutEffect(() => {
    document.addEventListener('click', () => {
      setInterval(() => console.log(count), 2000);
    });
  }, [count]);

  const click = () => {
    setCount(count + 1);
    setItems([...items, { id: count + 1 }]);
  };

  return (
    <React.Fragment>
      Current count: {count}
      <ul>
        {items.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
      <button onClick={() => click()}>Add</button>
    </React.Fragment>
  );
};

export default PleaseReviewMe;
