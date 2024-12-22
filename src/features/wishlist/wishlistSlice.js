import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      if (!state.value.some((item) => item.id === action.payload.id)) {
        state.value.push(action.payload);
      }
    },
    removeItemFromWishlist: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    setItemToWishlist: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, setItemToWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
