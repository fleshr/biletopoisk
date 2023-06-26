import { IFilter } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IAction = { filter: keyof IFilter; value: string };

const initialState: IFilter = {
  name: "",
  genre: "",
  cinema: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<IAction>) => {
      const { filter, value } = action.payload;
      state[filter] = value;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
