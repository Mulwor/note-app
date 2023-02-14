import React from 'react';
import ReactDOM from 'react-dom';
import { createEffect, createStore, createEvent, sample } from 'effector';
import { useStore, useStoreMap } from 'effector-react';

const submitted = createEvent();
const setField = createEvent();

// ! Выводит в консоль значения которые мы написали в инпутах
const sendFormFx = createEffect((params) => console.log(params))


// ! Cоздаем стор с пустым объектом, в который запихиваем эвент
const $form = createStore({}).on(setField, (s, { key, value }) => ({
  ...s,
  [key]: value,
}));

sample({
  clock: submitted,
  source: $form,
  target: sendFormFx,
});


// ! prepend - добавляет тип к событию
const handleChange = setField.prepend((e) => ({
  key: e.target.name,
  value: e.target.value,
}));

const Field = ({ name, type, label }) => {
    const value = useStoreMap({
        store: $form,
        keys: [name],
        fn: (values) => values[name] || '',
    });
  return (
    <div>
      {label} <input name={name} type={type} value={value} onChange={handleChange} />
    </div>
  );
};

export const Forms = () => (
  <form onSubmit={submitted}>
    <Field name="login" label="Login" />
    <Field name="password" type="password" label="Password" />
    <button type="submit">Submit!</button>
  </form>
);

submitted.watch((e) => {
  e.preventDefault();
});

