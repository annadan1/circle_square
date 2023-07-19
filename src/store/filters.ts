import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  forms: string[];
  colors: string[];
  shades: string;
  columns: number;
}

const initialState: InitialState = {
  forms: [],
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
