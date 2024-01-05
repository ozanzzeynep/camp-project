import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
});

export default store;