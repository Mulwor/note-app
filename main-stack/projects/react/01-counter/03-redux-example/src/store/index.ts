import { configureStore } from '@reduxjs/toolkit';
import { counterReducer as counter } from '../features/counter/counterSlice';

// ? Конфигурация Redux-хранилища.
export const store = configureStore({
  reducer: {
    counter,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({});
  },
});


// ? Тип для состояния всего приложения.
export type RootState = ReturnType<typeof store.getState>

// ? Тип для диспетчера Redux-экшенов.
export type AppDispatch = typeof store.dispatch
