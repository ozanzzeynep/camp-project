import { createSlice } from "@reduxjs/toolkit";
import { cartItems }  from "../initialValues/cartItems";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartItems,
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {},
  },
});


export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;
