import { useState } from 'react';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

export default function Function() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          setText('');
          setTodos([
            {
              ...todos,
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Добавить в начало списка а все остальные сдвинуть вниз
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
