import { createSlice } from "@reduxjs/toolkit";

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
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.products.push(action.payload);
    },
   
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
