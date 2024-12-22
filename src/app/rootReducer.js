import { combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import collectionReducer from "../features/collection/collectionSlice";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  collection: collectionReducer,
});

export default rootReducer;
