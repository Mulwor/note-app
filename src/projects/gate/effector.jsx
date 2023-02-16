import { createStore, createEffect, forward } from 'effector';
import { useStore, createGate } from 'effector-react';

// Для запроса апишки
const getTodoFx = createEffect(async ({ id }) => {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return req.json();
});

// Главный стор
const $todo = createStore(null).on(getTodoFx.doneData, (_, todo) => todo);


// ============== ==========  =================
export const TodoGate = createGate();

// Мы вызовем getTodoFx эффект каждый раз когда мост будет обновлять свое состояние
forward({ 
    from: TodoGate.state, 
    to: getTodoFx 
});




// ============== ==========  =================
export function Todo() {
  const todo = useStore($todo);
  const loading = useStore(getTodoFx.pending);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!todo || Object.keys(todo).length === 0) {
    return <div>empty</div>;
  }

  return (
    <div>
      <p>title: {todo.title}</p>
      <p>id: {todo.id}</p>
    </div>
  );
}
