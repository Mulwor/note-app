import { useEffect, useLayoutEffect, useState } from "react";
// какие будут логи, при монтировании и после клика на кнопку

export function Logs1() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(state, "effect");

    return () => {
      console.log(state, "effect cleanup");
    };
  }, [state]);

  useLayoutEffect(() => {
    console.log(state, "layout effect");

    return () => {
      console.log(state, "layout cleanup");
    };
  }, [state]);

  return (
    <div>
      <button onClick={() => setState((prev) => prev + 1)}>click</button>
    </div>
  );
}
