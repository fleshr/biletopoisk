import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IState = Record<string, number>;

const initialState: IState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const cartItem = state[action.payload];

      if (!cartItem) return state;

      const count = cartItem - 1;
      if (count < 1) {
        delete state[action.payload];
      } else {
        state[action.payload] -= 1;
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { increment, decrement, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
