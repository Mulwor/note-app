import React from 'react';
import {
  counterSelector,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from './features/counter/counterSlice.ts';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks.ts';

enum CounterStatus {
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
  NEUTRAL = 'neutral',
}

const CounterClassnameByStatus = {
  [CounterStatus.NEGATIVE]: 'text-red-500',
  [CounterStatus.POSITIVE]: 'text-green-500',
  [CounterStatus.NEUTRAL]: 'text-neutral-900',
};

const App = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector(counterSelector);     // ? Получение значения счетчика из хранилища

  let className: string = CounterClassnameByStatus[CounterStatus.NEUTRAL];

  if (counter < 0) {
    className = CounterClassnameByStatus[CounterStatus.NEGATIVE];
  } else if (counter > 0) {
    className = CounterClassnameByStatus[CounterStatus.POSITIVE];
  }

  return (
    <div className='max-w-4xl w-full mx-auto p-3 grid gap-3 bg-white border-2 rounded-md'>
      <h1 className='text-lg md:text-3xl font-bold text-center'>Counter</h1>
      <p className={`font-bold text-center text-8xl ${className}`}>{counter}</p>
      <div className='grid gap-3 sm:grid-cols-5'>
        <Button className='bg-red-500 hover:bg-red-400' onClick={() => dispatch(decrement())}>
          Decrease
        </Button>
        <Button className='bg-red-500 hover:bg-red-400' onClick={() => dispatch(decrementByAmount(10))}>
          Decrease By Amount
        </Button>
        <Button className='bg-neutral-500 hover:bg-neutral-400' onClick={() => dispatch(reset())}>
          Reset
        </Button>
        <Button className='bg-green-500 hover:bg-green-400' onClick={() => dispatch(incrementByAmount(10))}>
          Increase By Amount
        </Button>
        <Button className='bg-green-500 hover:bg-green-400' onClick={() => dispatch(increment())}>
          Increase
        </Button>
      </div>
    </div>
  );
};

export default App;


interface IButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`btn font-bold text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
