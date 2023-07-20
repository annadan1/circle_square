import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";
import figuresReducer from "./figures";

export const store = configureStore({
  reducer: {
    filtersReducer,
    figuresReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
