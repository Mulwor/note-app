import { createEffect, forward, createStore } from 'effector';
import { useList } from 'effector-react';

const getAllId = createEffect(
    // ! handler - функция для обработки вызовов эффектов
    { handler: async () => [1, 2, 3] }
);


const getPostsByIds = createEffect({
  handler: (ids) =>
    Promise.all(
      ids.map(async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts = await res.json();
        return { id, posts };
      }),
    ),
});

forward({
  from: getAllId.done.map(({ result }) => result),
  to: getPostsByIds,
});

// !createStore - создает пустой массив. on - служит для обновления (добавления)
const postGroups = createStore([])
    .on(getPostsByIds.done, (list, { result }) => [
        ...list,
        ...result,
    ]);

    
export function Sequence() {
  return useList(postGroups, ({ id, posts }) =>
    posts.map(({ title, body }) => (
      <div>
        {title} <br />
        {body} <hr />
      </div>
    )),
  );
}
