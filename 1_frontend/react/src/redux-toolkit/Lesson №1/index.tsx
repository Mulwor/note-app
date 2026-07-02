import React from "react";
import { store } from "./store";
import { DecrementAction, IncrementAction } from "./types";

export const LessonOne = () => {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });

    return unsubscribe;
  }, []);

  return (
    <div className="card">
      <button onClick={() =>
        store.dispatch({
          type: "decrement",
        } satisfies DecrementAction)
      }>
        decrement
      </button>
        
      counter {store.getState().counter}
        
      <button onClick={() =>
        store.dispatch({
          type: "increment",
        } satisfies IncrementAction)
      }>
        increment
      </button>
    </div>
  );
};
