import React, { createContext, useContext, useReducer } from 'react';
import { Action, AppContextProps, AppState } from '../types';
import { COUNTER_ACTIONS } from '../utils/constants';

// ? Создаем контекст для приложения
const AppContext = createContext<AppContextProps | null>(null);

// ? Начальное состояние счетчика
const initialState: AppState = { counter: 0 };

// ? Редуктор для управления состоянием счетчика.
export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case COUNTER_ACTIONS.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_ACTIONS.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_ACTIONS.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

// ? Компонент-поставщик контекста для приложения.
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);        // Используем хук useReducer для управления состоянием

  // ? Уменьшения, увеличение и обнуление значения счетчика.
  const handleDecrease = () => dispatch({ type: COUNTER_ACTIONS.DECREASE });
  const handleIncrease = () =>  dispatch({ type: COUNTER_ACTIONS.INCREASE });
  const handleReset = () => dispatch({ type: COUNTER_ACTIONS.RESET });

  // ? Возвращаем провайдер контекста со значением и обработчиками
  return (
    <AppContext.Provider value={{ ...state, dispatch, handleDecrease, handleIncrease, handleReset }}>
      {children}
    </AppContext.Provider>
  );
};


// ? Хук для использования контекста приложения
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext должен использоваться внутри AppProvider');
  }
  return context;
};
