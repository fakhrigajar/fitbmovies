import { combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import collectionReducer from "../features/collection/collectionSlice";
import videoReducer from "../features/video/videoSlice";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  collection: collectionReducer,
  video: videoReducer,
});

export default rootReducer;
