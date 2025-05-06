import { configureStore } from "@reduxjs/toolkit";
import { Action, State } from "./types";

const initialState: State = {
  counter: 0,
};

// ? Если мы в state присвоим значение initialState, то он
// ? типизирует и состояние и передаст сюда начальное значение
// ? первый запуск reducer
const reducer = (state = initialState, action: Action) => {
  // ? Reducer является чистой функцией, которая принимает предыдущее состояние
  // ? и action, возвращает новое состояние 
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
