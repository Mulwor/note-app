import { createSelector, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { extraArgument, store } from "../app/store";

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ? Тип thunk, в котором будет наши все extra-argument
export type AppThunk<R = void> = ThunkAction<
  // ? Возвращаемое значения thunk
  R, 
  // ? Thunk будет работать с нашим состоянием
  AppState, 
  // ? Extra-argument
  typeof extraArgument, 
  // ? Базовый action - это unknown action
  UnknownAction
>;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();