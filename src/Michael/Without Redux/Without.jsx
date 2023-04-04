import React from "react";

function WithoutRedux() {
  // * 1. Для работы с тудулистом, где изначально будет хранится пустой массив
  const [todos, setTodos] = React.useState([]);
  // * 2. Для работы с формой, будет принимать строку, а затем все что мы печатаем
  const [text, setText] = React.useState("");

  // * 3. Метод, который отвечает за добавления тудушек при этом оставляя все старые
  // * элементы. При этом проверив, что текст не пустой, а после добавления сбрасываем
  // * тескст
  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <span className="delete"> &times; </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WithoutRedux;
