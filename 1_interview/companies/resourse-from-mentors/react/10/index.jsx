// Нужно найти, объяснить и исправить как можно больше проблем в реализации
// имитация запроса к серверу. просто получаем число асинхронно

const fetchRandomNumber = () => Promise.resolve(Math.random());

export const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  useEffect(async () => {
    setNumber(await fetchRandomNumber());

    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  });

  return (
    <div>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};
