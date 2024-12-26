import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    setItemToExplore: (state, action) => {
      console.log(action.payload);

      state.value = action.payload;
    },
  },
});

export const { setItemToExplore } = exploreSlice.actions;
export default exploreSlice.reducer;
