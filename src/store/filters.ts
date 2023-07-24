import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../types/store";

const initialState: Filters = {
  forms: [],
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
    addShapes: (state, { payload }: PayloadAction<string[]>) => {
      state.forms = [...state.forms, ...payload];
    },
    addColors: (state, { payload }: PayloadAction<string[]>) => {
      state.colors = [...state.colors, ...payload];
    },
    deleteShapes: (state, { payload }: PayloadAction<string>) => {
      state.forms = state.forms.filter((el) => el !== payload);
    },
    deleteColors: (state, { payload }: PayloadAction<string>) => {
      state.colors = state.colors.filter((el) => el !== payload);
    },
  },
});

export const { actions } = filterSlice;
export default filterSlice.reducer;
