import React from "react";
import {useDispatch} from 'react-redux'
import { removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed, toggleTodoComplete }) => {
  const dispatch = useDispatch()

  
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({id}))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
