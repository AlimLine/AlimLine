import { configureStore } from '@reduxjs/toolkit';
import starFallReducer from "@/redux/features/starFall.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    star_fall: starFallReducer,
  }
});
