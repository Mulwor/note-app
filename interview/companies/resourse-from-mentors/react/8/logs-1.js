// какой будет порядок вызова и почему

import * as React from "react";
import { useState, useEffect } from "react";

export function Logs3() {
  console.log(1);

  useEffect(() => {
    console.log(2);
  }, []);

  return <Child />;
}

function Child() {
  console.log(3);

  useEffect(() => {
    console.log(4);
  }, []);

  return "Logs3";
}
