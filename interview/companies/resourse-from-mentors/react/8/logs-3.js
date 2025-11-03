//какой будет порядок вывода в консоль

import { useEffect, useLayoutEffect } from "react";

export function Logs2() {
  console.log(1);

  useEffect(() => {
    console.log("effect");
  }, []);

  useLayoutEffect(() => {
    console.log("layout-effect");
  }, []);

  return <div>LOgs2</div>;
}
