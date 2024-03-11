import { configureStore } from "@reduxjs/toolkit";
import gastosReducer from "./gastos/gastosSlice";

export const store = configureStore({
  reducer: {
    gastos: gastosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
