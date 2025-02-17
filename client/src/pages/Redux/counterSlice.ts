import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
};

export const counterSlice = createSlice({
  name: "counterState",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;
