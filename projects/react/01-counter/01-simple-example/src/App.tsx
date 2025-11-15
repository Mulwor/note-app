import { useState } from 'react';

// ? Перечисление классов стилей для отображения счетчика в разных состояниях.
enum CounterClassNames {
  Negative = 'text-red-500',
  Positive = 'text-green-500',
  Neutral = 'text-neutral-900',
}

const App = () => {
  // ? Состояние счетчика
  const [counter, setCounter] = useState<number>(0);

  // ? Отображение счетчика - Меняет цвет когда доходит до определенного диапозона
  const className: CounterClassNames = counter < 0
    ? CounterClassNames.Negative
    : counter > 0 ? CounterClassNames.Positive : CounterClassNames.Neutral;

  // ? Увеличение, уменьшение и обнуления счетчика
  const handleDecrease = () => setCounter((result) => result - 1);
  const handleIncrease = () => setCounter((result) => result + 1);
  const handleReset = () => setCounter(0)

  return (
    <div className='max-w-md w-full mx-auto p-3 grid gap-3 bg-white border-2 rounded-md'>
      <h1 className='text-lg md:text-3xl font-bold text-center'>Counter</h1>
      <p className={`font-bold text-center text-8xl ${className}`}>{counter}</p>
      <div className='grid gap-3 sm:grid-cols-3'>
        <button className='btn font-bold text-white bg-red-500 hover:bg-red-400' onClick={handleDecrease}>
          Decrease
        </button>
        <button className='btn font-bold text-white bg-neutral-500 hover:bg-neutral-400' onClick={handleReset}>
          Reset
        </button>
        <button className='btn font-bold text-white bg-green-500 hover:bg-green-400' onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
