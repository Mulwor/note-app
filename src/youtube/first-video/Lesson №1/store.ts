import { configureStore } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

export type IncrementAction = {
  type: "increment";
};

export type DecrementAction = {
  type: "decrement";
};

export type Action = IncrementAction | DecrementAction;

// * Если мы в стейт присвоим значение initialState, то он
// * типизирует и состояние и передаст сюда начальное значение
// * первый запуск редьюсера
const reducer = (state = initialState, action: Action) => {
  // * Редьюсер должен быть чистой функцией, которая принимает
  // * предыдущее состояние и action и возвращает новое состояние
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
