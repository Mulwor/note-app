import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../users/users.slice";
import { countersReducer } from "../counters/counters.slice";
import { api } from "../shared/api"
import { router } from "./router"

export const extraArgument = {
  api,
  router
}

export const store = configureStore({
  reducer: {
    counters: countersReducer,
    [usersSlice.name]: usersSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: { extraArgument }})
});
