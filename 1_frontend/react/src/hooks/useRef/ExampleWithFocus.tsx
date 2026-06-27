import { useRef, useEffect } from 'react';

// ? Доступ к HTML-элементу (дом-нодам)
export const ExampleOne = () => {
  // * Если мы передаем в useRef - null, то это означает,
  // * что ты будешь хранить там dom-элемент
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef.current); // ? null

  const handleClick = () => {
    inputRef.current?.focus();
  };

  // * Мы получаем доступ к рефам только в useEffect
  useEffect(() => {
    console.log(inputRef.current); // ? <input type="text" />
  });

  // * Это работает следующим образом - когда мы передаем в реф какой-то inputRef
  // * реакт это видит и в поле current запишется значение этого дом-элемента

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export const ExampleSecond = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    divRef.current!.style.backgroundColor = 'red';
  };

  return (
    <div>
      <div ref={divRef}>This is a sample div</div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};
