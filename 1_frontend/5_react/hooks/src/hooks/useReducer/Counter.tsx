import { useReducer } from "react";

function reducer(
  state: { count: number },
  action: { type: "increment" | "decrement" | "reset" }
) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: (state.count = 0),
      };
    default:
      throw new Error();
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
