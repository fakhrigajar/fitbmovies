import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    isActive: false,
  },
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setItemToVideo: (state, action) => {
      console.log(action.payload);

      state.value = action.payload;
    },
  },
});

export const { setItemToVideo } = videoSlice.actions;
export default videoSlice.reducer;
