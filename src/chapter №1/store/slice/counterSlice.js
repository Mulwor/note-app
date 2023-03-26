import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count +=1
    },
    decrement: (state) => {
      state.count -=1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // * Берет состояние из инпута и добавляет его к счетчику  
    incrementByAmount: (state, action) => {
      console.log(action)
      state.count += action.payload
    }
  },
});

//* Все методы будут хранится в actions. Так устроен редакс
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;

//* Указываем по умолчанию, что будем экспортировать редьюсер
export default counterSlice.reducer;