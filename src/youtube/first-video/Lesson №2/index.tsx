import React, { useRef } from "react";
import { AppState, CounterId, DecrementAction, IncrementAction, store } from "./store";

export const LessonTwo = () => {
  return (
    <>
      <Counter counterId="first" />
      <Counter counterId="second" />
    </>
  );
};

// * Селектор - чистая функция которая принимает state и возвращает его
const selectCounter = (state: AppState, counterId: CounterId) => state.counters[counterId]

export function Counter({counterId}: {counterId: CounterId}) {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const lastStateRef = useRef<ReturnType<typeof selectCounter>>();

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const currentState = selectCounter(store.getState(), counterId)
      const lastState = lastStateRef.current

      if (currentState !== lastState) {
        forceUpdate();
      }

      lastStateRef.current = currentState;
    });

    return unsubscribe;
  }, []);

  const counterState = selectCounter(store.getState(), counterId)

  return (
    <div>
        <button
          onClick={() =>
            store.dispatch({
              type: "decrement",
              payload: { counterId }
            } satisfies DecrementAction)
          }
        >
          decrement
        </button>
        counter {counterState?.counter}
        <button
          onClick={() =>
            store.dispatch({
              type: "increment",
              payload: { counterId }
            } satisfies IncrementAction)
          }
        >
          increment
        </button>
    </div>
  )
}