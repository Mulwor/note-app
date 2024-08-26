import { useState, useRef } from "react";

// * В этом примере используется комбинация состояния и ссылок. Оба
// * startTime являются now переменными состояния, поскольку они используются
// * для рендеринга. Но нам также нужно хранить идентификатор интервала , чтобы
// * мы могли остановить интервал при нажатии кнопки. Поскольку идентификатор
// * интервала не используется для рендеринга, его уместно хранить в ссылке и
// * обновлять вручную.

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
