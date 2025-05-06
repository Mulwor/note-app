import { useDispatch, useSelector, useStore } from "react-redux";
import { configureStore, createSelector } from "@reduxjs/toolkit";
import { initialUsersList, usersSlice } from "./users/users.slice";
import { countersReducer } from "./counters/counters.slice";

export const store = configureStore({
  reducer: {
    counters: countersReducer,
    [usersSlice.name]: usersSlice.reducer,
  }
});

store.dispatch(usersSlice.actions.stored({
  users: initialUsersList
}));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();