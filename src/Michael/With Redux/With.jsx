import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function WithRedux() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
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
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default WithRedux;
