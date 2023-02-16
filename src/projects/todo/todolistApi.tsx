import { createEvent } from "effector";
import { createStore } from "effector";
import { sample } from "effector";

export function createTodoListApi(initial: string[] = []) {
    const insert = createEvent<string>();
    const remove = createEvent<number>();
    const change = createEvent<string>();
    const reset = createEvent<void>();
  
    const $input = createStore<string>('')
      .on(change, (_, value) => value)
      .reset(reset, insert);
  
    const $todos = createStore<string[]>(initial)
      .on(insert, (todos, newTodo) => [...todos, newTodo])
      .on(remove, (todos, index) => todos.filter((_, i) => i !== index));
  
    const submit = createEvent<React.SyntheticEvent>();
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