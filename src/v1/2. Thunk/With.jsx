import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function Thunk() {
  const [text, setText] = React.useState("");
  const {status, error} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo( text ));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {status === 'loading' && <h2>Загрузка</h2>}
      {error && <h2>Возникла ошибка: {error} </h2>}
      <TodoList />
    </div>
  );
}

export default Thunk;
