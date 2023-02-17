import { createEffect, createStore } from 'effector';
import { using, h, spec, list } from 'effector-dom';

// ! Создаем 3 стора и 2 событии. createEvent - это функция, которая позволяет
// ! изменять состояние при вызове, а также может быть хорошим способом извлечения данных 
const users = createStore(['alice', 'bob', 'carol']);
const currentUser = createStore('alice');
const log = createStore([]);
const startRequest = createEvent();
const nextRandomUser = createEvent();


// ! Метод для связывания юнитов связью вида "при срабатывании clock прочитать значение 
// ! из source и передать в target"
sample({
  clock: nextRandomUser,            // const nextRandomUser = createEvent();
  source: users,                    // const users = createStore(['alice', 'bob', 'carol']);
  target: currentUser,              // const currentUser = createStore('alice');
 
  // !Функция-обработчик, которая будет преобразовывать данные из source и clock перед отправлением в target
  fn: (list) => list[(Math.random() * list.length) | 0],
});

const request = createEffect({
  async handler({ ctrl, user }) {
    const users = { alice: '9s0p2', bob: 'sw17q', carol: 'k38w6'};
    const url = `https://api.myjson.com/bins/${users[user]}`;
    const req = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal: ctrl.signal,
    });
    return req.json();
  },
});

sample({
  source: request,
  clock: startRequest,
})
.watch(({ ctrl }) => { ctrl.abort();});

let nextID = 9;

sample({
  clock: startRequest,
  source: currentUser,
  fn: (user) => ({
    user,
    ctrl: new AbortController(),
    id: (++nextID).toString(36),
  }),
  target: request,
});

log.on(request, (list, { user, id }) => [...list, `[${id}] POST /${user}`])
   .on(request.finally, (list, { params, status, result, error }) => {
   if (error) {
      result = `${error.name}: ${error.message}`;
   }
   return [...list, `[${params.id}] POST /${params.user} -> ${status} ${JSON.stringify(result)}`];
});

setInterval(nextRandomUser, 250);
using(document.getElementById('root'), () => {
  h('section', () => {
    h('b', { text: 'Random user: ' });
    h('span', { text: currentUser });
  });
  
  h('section', () => {
    h('button', {
      text: 'Start request',
      handler: { click: startRequest },
    });
  });
  
  h('ul', () => {
    list(log, ({ store }) => {
      h('li', { text: store });
    });
  });
});
