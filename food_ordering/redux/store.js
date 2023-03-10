import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CARTSLICE";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});