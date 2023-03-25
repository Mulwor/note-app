import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice.js";

// * Создает так называемое хранилища внутри которого сидят рабочие
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
