export const tabs = ['Главная', 'Аналитика', 'Настройки'];

export const HeavyTabFunction = ({ tab }) => {
  // Имитируем тяжёлый компонент
  const items = Array.from({ length: 10000 }, (_, i) => `${tab} — строка ${i + 1}`);
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}