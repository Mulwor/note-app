import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function Thunk() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default Thunk;
