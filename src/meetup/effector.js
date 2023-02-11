import { createEffect, createEvent, createStore } from "effector";
import { wait } from "./components/helpers/wait";

// 2. Способ управления нашим хранилищам
export const setModalVisibility = createEvent();

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

