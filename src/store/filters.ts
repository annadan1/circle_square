import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  shapes: string[];
  colors: string[];
  shades: string;
  columns: number;
}

const initialState: InitialState = {
  shapes: [],
  colors: [],
  shades: "all",
  columns: 4,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    changeShades: (state, { payload }: PayloadAction<string>) => {
      state.shades = payload;
    },
    changeColumns: (state, { payload }: PayloadAction<number>) => {
      state.columns = payload;
    },
    addShapes: (state, { payload }: PayloadAction<string[]>) => {
      state.shapes = [...state.shapes, ...payload];
    },
    addColors: (state, { payload }: PayloadAction<string[]>) => {
      state.colors = [...state.colors, ...payload];
    },
    deleteShapes: (state, { payload }: PayloadAction<string>) => {
      state.shapes = state.shapes.filter((el) => el !== payload);
    },
    deleteColors: (state, { payload }: PayloadAction<string>) => {
      state.colors = state.colors.filter((el) => el !== payload);
    },
  },
});

export const { actions } = filterSlice;
export default filterSlice.reducer;
