import React from "react";

export const DebouncedEffect = () => {
  const [val, setVal] = useState("");

  const debouncedVal = useDebounce(val, 500);

  console.log({ val, debouncedVal });

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={handleChange}
        placeholder="debounced"
      />
    </div>
  );
};

export const useDebounce = (val, time) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(val);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [time, val]);

  return debouncedValue;
};
