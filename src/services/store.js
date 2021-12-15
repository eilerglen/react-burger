import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import orderReducer from "./orderSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    cart: cartReducer,
  },
  devTools: true,
});

export default store;

