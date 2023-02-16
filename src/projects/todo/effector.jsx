import React from 'react';
import { useStore, useList } from 'effector-react';
import { createTodoListApi } from './todolistApi';


export const firstTodoList = createTodoListApi(['hello, world!']);
export const secondTodoList = createTodoListApi(['hello, world!']);

export function TodoList({ label, model }) {
  const input = useStore(model.$input);

  const todos = useList(model.$todos, (value, index) => (
    <li>
      {value}{' '}
      <button type="button" onClick={() => model.remove(index)}>
        Remove
      </button>
    </li>
  ));

  return (
    <>
      <h4>{label}</h4>
      <ul>{todos}</ul>
      <form>
        <label>Insert todo: </label>
        <input
          type="text"
          value={input}
          onChange={(event) => model.change(event.currentTarget.value)}
        />
        <input type="submit" onClick={model.submit} value="Insert" />
      </form>
    </>
  );
}
