import { createEffect, createEvent, createStore } from "effector";
import { wait } from "./components/helpers/wait";

// 2. Способ управления нашим хранилищам.
export const setModalVisibility = createEvent();

// 8. Мы можем эффектор использовать когда хотим получить какие-то данные с бека.
// Чтобы не путать евенты с эффектами в коде, добавляет слово Fx
export const getDataFx = createEffect((number = 3) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${number}`
  ).then((response) => wait(3000, response.json()));
})


// 1. Cоздаем стор-хранилища, в котором будет хранится состояния видимости
// нашего окна (то есть оно видимое или нет). Аргументом createStore принимает
// значение по умолчанию, что значит, что оно скрыто (false)
export const $modalVisibility = createStore(false)
    // 3. Логика прописывается в самом хранилище. С помощью on мы будем следить
    // за срабатыванием события (setModalVisibility) вторым аргументом данные метод
    // принимает функцию, которая нам будет возвращать новое состояние. Так как старое
    // состояние нам не интересно, мы просто его обозначим нижним подчеркиванием и новое 
    // состояние isVisible будем возвращать наше хранилище
  .on(setModalVisibility, (_, isVisivle) => isVisivle)
  // Обновит наше состояние (модальное окно закроется после того как данные были получены)
  .reset(getDataFx.doneData)

// 9. Хранилища в котором будут находится наши данные. По умолчанию у нас пустой массив.
// Объединяем наш стор и наше хранилище. Нас интересует состояние когда мы уже получили 
// данные. И когда мы получим данные оно перезапишется
export const $todos = createStore([]).on(getDataFx.doneData, (_, data) => data);

export const $dataLoading = createStore(false)
.on(getDataFx.pending, (_, isPending) => isPending)