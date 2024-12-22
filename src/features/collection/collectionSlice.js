import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addItemToCollection: (state, action) => {
      if (!state.value.some((item) => item.id === action.payload.id)) {
        state.value.push(action.payload);
      }
    },
    removeItemFromCollection: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    setItemToCollection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  addItemToCollection,
  removeItemFromCollection,
  setItemToCollection,
} = collectionSlice.actions;
export default collectionSlice.reducer;
