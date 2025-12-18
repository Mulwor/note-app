import { AppState } from "../store";
import { Action, CounterId, CountersState, CounterState } from "./types";

const initialCounterState: CounterState = { counter: 0 };
const intiialCountersState: CountersState = {};

export const countersReducer = (
  state = intiialCountersState,
  action: Action
): CountersState => {
  switch (action.type) {
    case "increment": {
      const { counterId } = action.payload;
      const currentCounter = state[counterId] ?? initialCounterState;
      return {
        ...state,
        [counterId]: {
          ...currentCounter,
          counter: currentCounter.counter + 1,
        },
      };
    }
    case "decrement": {
      const { counterId } = action.payload;
      const currentCounter = state[counterId] ?? initialCounterState;
      return {
        ...state,
        [counterId]: {
          ...currentCounter,
          counter: currentCounter.counter - 1,
        },
      };
    }
    default:
      return state;
  }
};

export const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];