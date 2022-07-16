import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { productApi } from "./product/productApi";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>
