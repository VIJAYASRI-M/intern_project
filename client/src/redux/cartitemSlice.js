import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../Assets/categoryData";

const initialState = {
  //   value: {
  //     name: "",
  //     id:0,
  //     category: "",
  //     desc:"",
  //     quantity: 0,
  //     price:"",
  //     cart:false,
  //     favorite:false
  //   },
  cartItems: cartItems,
};

export const cartitemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
        state.cartItems.push(action.payload);
    },
   
  },
});

export const { addCart } = cartitemSlice.actions;
export default cartitemSlice.reducer;
