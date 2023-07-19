import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";

export const store = configureStore({
  reducer: {
    filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
