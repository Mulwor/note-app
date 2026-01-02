import { createAction, createReducer } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { CounterId, CountersState, CounterState } from "./types";

export const incrementAction = createAction<{
  counterId: CounterId;
}>('counters/increment')

export const decrementAction = createAction<{
  counterId: CounterId;
}>('counters/decrement')

const initialCounterState: CounterState = { counter: 0 };
const initialCountersState: CountersState = {};

export const countersReducer = createReducer(
  initialCountersState,
  (builder) => {
    builder.addCase(incrementAction, (state, action) => {
      const { counterId } = action.payload;
      const currentCounter = state[counterId] ?? initialCounterState;
      return {
        ...state,
        [counterId]: {
          ...currentCounter,
          counter: currentCounter.counter + 1,
        },
      };
    })
    builder.addCase(decrementAction, (state, action) => {
      const { counterId } = action.payload;
      const currentCounter = state[counterId] ?? initialCounterState;
      return {
        ...state,
        [counterId]: {
          ...currentCounter,
          counter: currentCounter.counter - 1,
        },
      };
    })
  }
)

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];