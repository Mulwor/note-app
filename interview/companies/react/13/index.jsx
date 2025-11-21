// Найти ошибки в коде

type SomeDTO = { id: number };

export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  return (
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>
      <ul>
        {list.map((item) => {
          <Item key={index} item={item} />;
        })}
      </ul>

      <button onClick={handleReverseClick}>Click to reverse</button>
    </div>
  );
}