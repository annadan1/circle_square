import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../types/store";

const initialState: Filters = {
  figures: [],
  colors: [],
  dark: null,
  columns: 4,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    changeDark: (state, { payload }: PayloadAction<boolean | null>) => {
      state.dark = payload;
    },
    changeColumns: (state, { payload }: PayloadAction<number>) => {
      state.columns = payload;
    },
    changeColors: (state, { payload }: PayloadAction<string>) => {
      let indexColor = state.colors.indexOf(payload);
      if (indexColor === -1) {
        state.colors.push(payload);
      } else {
        state.colors = state.colors.filter((el) => el !== payload);
      }
    },
    changeFigures: (state, { payload }: PayloadAction<string>) => {
      let indexFigure = state.figures.indexOf(payload);
      if (indexFigure === -1) {
        state.figures.push(payload);
      } else {
        state.figures = state.figures.filter((el) => el !== payload);
      }
    },
  },
});

export const { actions } = filterSlice;
export default filterSlice.reducer;
