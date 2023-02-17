import { TodoList } from './effector.jsx';
import { firstTodoList, secondTodoList } from './effector.jsx';

export function Todo() {
  return (
    <>
      <TodoList label="First todo list" model={firstTodoList} />
      <TodoList label="Second todo list" model={secondTodoList} />
    </>
  );
}
