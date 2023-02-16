import { TodoList } from './effector';
import { firstTodoList, secondTodoList } from './effector';

export function Todo() {
  return (
    <>
      <TodoList label="First todo list" model={firstTodoList} />
      <TodoList label="Second todo list" model={secondTodoList} />
    </>
  );
}
