import React, { useState, useRef } from "react";

export default function App() {
  const [value1, setValue1] = useState("");
  const inputRef = useRef(null);

  const onClickForm = (e) => {
    e.preventDefault(); // Предотвращаем отправку формы
    const value2 = inputRef.current.value;
    console.log("controlled: ", value1);
    console.log("uncontrolled: ", value2);
  };

  return (
    <form onClick={onClickForm}>
      <input
        placeholder="controlled"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input placeholder="uncontrolled" ref={inputRef} />
      <button>Отправить заявку на кредит</button>
    </form>
  );
}
