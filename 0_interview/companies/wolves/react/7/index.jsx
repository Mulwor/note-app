import { useState, useEffect } from "react";

// реализовать хук useDebounce
/**
 *  debounce(fn, ms) – это обёртка, которая откладывает вызовы fn, пока не пройдёт ms миллисекунд бездействия
 *  а затем вызывает f один раз с последними аргументами
 */

export function useDebounce(value, delay) {}

export default function App() {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  return (
    <form>
      <input
        placeholder="value"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <div>deb: {debouncedValue}</div>
    </form>
  );
}
