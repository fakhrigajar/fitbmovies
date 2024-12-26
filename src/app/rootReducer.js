import { combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import collectionReducer from "../features/collection/collectionSlice";
import videoReducer from "../features/video/videoSlice";
import exploreReducer from "../features/explore/exploreSlice";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  collection: collectionReducer,
  video: videoReducer,
  explore: exploreReducer,
});

export default rootReducer;
