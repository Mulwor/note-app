import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState<number>(0);
  const [age, setAge] = useState(42);
  const [notUpdate, setNotUpdate] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  function correctIncrement() {
    setAge((a) => a + 1);
  }

  function wrongIncrement() {
    setNotUpdate(notUpdate + 1);
  }

  return (
    <>
      <span>Обновляет состояние кнопки: </span>
      <button onClick={handleClick}>You pressed me {count} times</button>

      <hr />

      <h3>Рассмотрим еще один пример:</h3>
      <div>Your age: {age}</div>
      <button onClick={correctIncrement}>+1</button>
      <button
        onClick={() => {
          correctIncrement();
          correctIncrement();
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          correctIncrement();
          correctIncrement();
          correctIncrement();
        }}
      >
        +3
      </button>
      <hr />

      <h3>Неправильное обработка счетчика:</h3>
      <div>Your age: {notUpdate}</div>
      <button onClick={wrongIncrement}>+1</button>
      <button
        onClick={() => {
          wrongIncrement();
          wrongIncrement();
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          wrongIncrement();
          wrongIncrement();
          wrongIncrement();
        }}
      >
        +3
      </button>

      <hr />
    </>
  );
}
