import { createSlice } from "@reduxjs/toolkit";

interface Figures {
  figures: [];
}

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

export const {actions} = figuresSlice;
export default figuresSlice.reducer;