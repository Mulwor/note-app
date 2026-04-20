import React from 'react';
import './Sixth.css';

export const ExampleThreeWithoutUseRef = () => {
  let ulElem;
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

  const handleScroll = () => {
    console.log('Был скролл!');
  };

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1];
    setNumbers([...numbers, lastNumber + 1]);
  };

  React.useEffect(() => {
    ulElem = document.querySelector('ul');
    ulElem?.addEventListener('scroll', handleScroll);
  }, [ulElem]);

  const removeScroll = () => {
    ulElem?.removeEventListener('scroll', handleScroll);
  };

  return (
    <div>
      <ul>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <button onClick={removeScroll}>▶️ Не следить</button>
    </div>
  );
};

export const ExampleThreeWithRef = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
  const timerRef = React.useRef();

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000);
  };

  const stop = () => {
    console.log(timerRef.current);
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <ul>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <button onClick={start}>▶️ Старт</button>
      <button onClick={stop}>⏹ Стоп</button>
    </div>
  );
};
