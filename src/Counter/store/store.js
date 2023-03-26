import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// * Создает так называемое хранилища внутри которого сидят рабочие
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
