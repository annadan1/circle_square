import { createSlice } from "@reduxjs/toolkit";
import { Figures } from "../types/store";

const initialState: Figures = {
  figures: [],
};

const figuresSlice = createSlice({
  name: "figuresSlice",
  initialState,
  reducers: {
    changeFigures: (state, { payload }) => {
      state.figures = payload;
    },
  },
});

export const { actions } = figuresSlice;
export default figuresSlice.reducer;