import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import homeReducer from "../../features/home/presentation/viewmodels/homeSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
