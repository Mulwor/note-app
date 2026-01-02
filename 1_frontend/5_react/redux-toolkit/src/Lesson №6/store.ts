import { useDispatch, useSelector, useStore } from "react-redux";
import { combineReducers, configureStore, createSelector } from "@reduxjs/toolkit";
import { initialUsersList, usersReducer } from "./users/users.slice";
import { countersReducer } from "./counters/counters.slice";
import { UsersStoredAction } from "./users/types";

const reducer = combineReducers({
  users: usersReducer,
  counters: countersReducer
});

export const store = configureStore({
  reducer: reducer,
});

store.dispatch({
  type: "usersStored",
  payload: { users: initialUsersList },
} satisfies UsersStoredAction);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();