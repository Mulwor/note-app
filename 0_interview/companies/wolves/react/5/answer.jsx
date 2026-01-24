import React, { useState, useEffect } from "react";

/**
 1 - задать initial values 

 2 - Хотя результат heavyFunc () используется только для начального рендеринга, вы все равно вызываете эту функцию при каждом рендеринге. Это может быть плохо, для производительности если речь идет о выполнении дорогостоящих вычислений
 Поэтому преобразуем в () => heavyFunc()

 3 - добавить key и семантическую верстку

 4 - массив [1, 2, 3, 4]  вынести в глобальную область, чтобы не пересоздавался

 5 - внутри useffect вынести логику в отдельную async функцию

 6 - в addeventlistener передаются ссылки на 2 разные функции поэтому отписка не будет происходить, если у нас много подписок на addEventlistener то могут произойти утечки памяти в браузере и из-за этого может лагать

 7 - разделить логику на 2 юзеффекта

 8 - добавить обработку error, isLoading

 9 - предложить добавить throttle для оптимизации события скролла
 */

const fetchNumber = () => Promise.resolve(Math.random());

const heavyFunc = () => {
  return Math.random();
};

const ARR = [1, 2, 3, 4];

const App = () => {
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY);
  const [data, setData] = useState(() => heavyFunc());

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNumber = async () => {
      try {
        setIsLoading(true);
        const num = await fetchNumber();
        setNumber(num);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getNumber();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    // сказать что можно добавить throttle для скролла
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) return <div>loading</div>;

  return (
    <div>
      <div>{number}</div>
      <div>{scroll}</div>

      <ul>
        {ARR.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
