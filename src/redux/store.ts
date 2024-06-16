import { configureStore } from "@reduxjs/toolkit";
import product from "./slices/user-product-slice";
import website from "./slices/active-website-slice";

export const store = configureStore({
  reducer: { product: product, website: website },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
