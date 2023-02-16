import { createEvent } from "effector";
import { createStore } from "effector";
import { sample } from "effector";

export function createTodoListApi(initial) {
    const insert = createEvent();
    const remove = createEvent();
    const change = createEvent();
    const reset = createEvent();
  
    const $input = createStore('')
      .on(change, (_, value) => value)
      .reset(reset, insert);
  
    const $todos = createStore(initial)
      .on(insert, (todos, newTodo) => [...todos, newTodo])
      .on(remove, (todos, index) => todos.filter((_, i) => i !== index));
  
    const submit = createEvent();
    submit.watch((event) => event.preventDefault());
  
    sample({
      clock: submit,
      source: $input,
      target: insert,
    });
  
    return {
      submit, remove, change, reset,
      $todos, $input,
    };
  }