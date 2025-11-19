/** 
Написать таймер который запускается/останавливается при клике на кнопку
если таймер запущен, то каждую секунду он увеличивается на 1
*/
export const Counter = () => {
  const [time, setTime] = useState(0);
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    if (!isRun) return;

    let timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRun]);

  const handleToggle = () => setIsRun((prev) => !prev);

  return (
    <div>
      <div>count: {time}</div>
      <button onClick={handleToggle}>Toggle timer</button>
    </div>
  );
};
