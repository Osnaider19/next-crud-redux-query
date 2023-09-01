import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 1,
};

export const homeSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export default homeSlice.reducer;
export const { increment, decrement } = homeSlice.actions;
