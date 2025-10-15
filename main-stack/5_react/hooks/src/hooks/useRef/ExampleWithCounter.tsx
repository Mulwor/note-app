import { useRef } from 'react';

// * Этот компонент использует ссылку для отслеживания того, сколько раз
// * была нажата кнопка. Обратите внимание, что здесь можно использовать
// * ссылку вместо состояния, поскольку количество нажатий считывается и
// * записывается только в обработчике событий.

export default function Counter() {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log('You clicked ' + ref.current + ' times!');
  };

  return <button onClick={handleClick}>Click me!</button>;
}
