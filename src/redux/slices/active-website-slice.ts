import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

const activeWebsiteSlice = createSlice({
  name: "Website",
  initialState,
  reducers: {
    changeActiveWebsite(state, action: PayloadAction<any>) {
      return action.payload;
    },
  },
});

export const { changeActiveWebsite } = activeWebsiteSlice.actions;
export default activeWebsiteSlice.reducer;
