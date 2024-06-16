import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productSlice {
  value: number;
}

const initialState: any = [];

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<any>) {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
