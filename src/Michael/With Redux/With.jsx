import React from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function WithRedux() {
  const [text, setText] = React.useState("");

  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return { ...todo, completed: !todo.completed };
    //   }),
    // );
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList  />
    </div>
  );
}

export default WithRedux;
