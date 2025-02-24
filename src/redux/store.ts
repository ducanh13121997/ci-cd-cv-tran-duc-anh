import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/api";
import { blogApi } from "../services/blog-api";
import rootReducer from "./reducer";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, blogApi.middleware),
});
