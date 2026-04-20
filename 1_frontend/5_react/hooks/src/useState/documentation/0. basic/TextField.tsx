import { useState, ChangeEvent } from 'react';

export function MyInput() {
  const [text, setText] = useState<string>('hello');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <>
      <p>Что ты написал: {text}</p>
      <input
        value={text}
        onChange={handleChange}
      />
      <button onClick={() => setText('hello')}>Reset</button>

      <hr />
    </>
  );
}
