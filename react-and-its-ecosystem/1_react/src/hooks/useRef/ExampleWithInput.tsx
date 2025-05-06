import { useState, useRef, ChangeEvent } from 'react';

export const UncontrolledInput = () => {
  return (
    <div>
      <span>Простой инпут: </span>
      <input />
    </div>
  );
};

export const GetValueUncontrolledByButton = () => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const saveValue = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <div>
      <span>Меняет значение при клике</span>
      <input ref={inputRef} />
      <button onClick={saveValue}>save</button> - actual value: {value}
    </div>
  );
};

export const WatchValueUncontrolledInput = () => {
  const [value, setValue] = useState('');

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  };

  return (
    <div>
      <span>Меняет значение при написании: </span>
      <input onChange={onChangeValue} /> - {value}
    </div>
  );
};

export const ExampleOne = () => {
  return (
    <div>
      <UncontrolledInput />
      <GetValueUncontrolledByButton />
      <WatchValueUncontrolledInput />
    </div>
  );
};
