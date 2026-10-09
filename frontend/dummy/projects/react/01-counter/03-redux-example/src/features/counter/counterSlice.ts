import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

// ? Slice для управления состоянием счетчика.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // ? Экшен для сброса состояния счетчика, добавление и уменьшение.
    reset: () => initialState,
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },

    // ? Экшен для увеличения/уменьшение счетчика на указанное количество.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
});

// ? Экшены для управления счетчиком.
export const {
  reset, increment, decrement,
  incrementByAmount, decrementByAmount
} = counterSlice.actions;

// ? Редуктор счетчика.
export const counterReducer = counterSlice.reducer;
// ? Селектор для получения состояния счетчика из Redux-хранилища.
export const counterSelector = (state: { counter: CounterState }): CounterState => state.counter;

