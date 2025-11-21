// Написать таймер который увеличивается каждую секунду При размонтировании должны отправляться метрики, с текущим значением currentDate
// Начальный код:

```
export const Counter = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString());

  return <h1>{currentDate}</h1>;
};
```

```
export const Counter = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString());
  const dateRef = useRef(currentDate);

  useEffect(() => {
    let interval = setInterval(() => {
      const curDate = new Date().toISOString();
      setCurrentDate(curDate);
      dateRef.current = curDate;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    return () => {
      logMetric(dateRef.current);
    };
  }, []);

  return <h1>{currentDate}</h1>;
};
```