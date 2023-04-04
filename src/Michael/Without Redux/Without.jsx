import React from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function WithoutRedux() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState("");

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

  // * 1. Функция, которая удаляет тудушки
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  //* 2. Логика для изменения внешнего вида когда у нас отрабатывает чекбокс (делаем) его управляемой
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return { ...todo, completed: !todo.completed };
      }),
    );
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default WithoutRedux;
