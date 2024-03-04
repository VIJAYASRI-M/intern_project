import { createSlice } from "@reduxjs/toolkit";
import { sampleProducts } from "../Assets/categoryData";

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
  products: sampleProducts,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    addTocart: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === parseInt(productId));
      if (product) {
        product.cart = true;
      }
    },
  },
});

export const { addProduct, addTocart } = productSlice.actions;
export default productSlice.reducer;
