const ITEMS = Array.from({ length: 20000 }, (_, i) => `Элемент ${i + 1}`);

export const HeavyListFunction = ({ query }) => {
  const filtered = ITEMS.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul>
      {filtered.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}