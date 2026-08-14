import { useState } from "react";

function Batching() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("Click on function")

    setCount(c => c + 1);
    setFlag(f => !f);


    // React НЕ перерендерит компонент после каждого вызова.
    // Будет ОДИН перерендер в конце функции.
  }

  return <button onClick={handleClick}>Click</button>;
}

function Counter() {
  const [number, setNumber] = useState(0);
  const [number_02, setNumber_02] = useState(0);

  function handleClickByOne() {
    setNumber(number + 1); // number = 0
    setNumber(number + 1); // number = 0 (снова!)
    setNumber(number + 1); // number = 0 (снова!)
    // Итог: number станет 1 (а не 3!), но рендер будет 1 (бэтчинг сработал)
  }

  function handleClickByThree() {
    setNumber_02(prev => prev + 1); 
    setNumber_02(prev => prev + 1); 
    setNumber_02(prev => prev + 1);
  }

  return (
    <>
      Счетчик:
      <div>
        Без функции обновления (плохо)
        <button onClick={handleClickByOne}>Увеличить на 1 = {number}</button>
      </div>
      
      <div>
        С функцией обновления (правильно)
        <button onClick={handleClickByThree}>Увеличить на 3 = {number_02} </button>
      </div>
    </>
  )
}

function BatchingWithTimersAndPromise() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Ситуация 1: Обычный обработчик (работает везде)
  const handleClick = () => {
    setCount(c => c + 1);
    setText('Updated');
    // ВСЕГДА 1 рендер (и в React 17, и в 18)
  };

  // Ситуация 2: Асинхронный вызов (ГЛАВНОЕ ОТЛИЧИЕ)
  const handleAsyncClick = () => {
    setTimeout(() => {
      setCount(c => c + 1);
      setText('Async Updated');
      // В React 17 → 2 рендера (сначала обновится count, потом text)
      // В React 18 → 1 рендер (оба обновятся вместе) ✅
    }, 1000);
  };

  // Ситуация 3: Промис (аналогично)
  const handleFetchClick = () => {
    fetch('/api/data')
      .then(() => {
        setCount(c => c + 1);
        setText('Fetched');
        // В React 17 → 2 рендера
        // В React 18 → 1 рендер ✅
      });
  };

  console.log("Main render")

  return (
    <div>
      <button onClick={handleClick}>Синхронно {count}</button>
      <button onClick={handleAsyncClick}>С таймером {count}</button>
      <button onClick={handleFetchClick}>С fetch</button>
    </div>
  );
}

export const GroupOfBatching = () => {
  return (
    <div>
      <Batching />

      <div>
        <Counter />
      </div>

      <div>
        <BatchingWithTimersAndPromise />
      </div>

    </div>
  )
}