import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<any>) {
      state.push(action.payload);
    },
    deleteProducts(state) {
      return [];
    },
  },
});

export const { addProduct, deleteProducts } = productSlice.actions;
export default productSlice.reducer;
