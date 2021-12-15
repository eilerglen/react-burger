import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import ingredientDetailsViewReducer from "./ingredientDetailsViewSlice";
import orderReducer from "./orderSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    ingredientDetailsView: ingredientDetailsViewReducer,
    order: orderReducer,
    cart: cartReducer,
  },
  devTools: true,
});

export default store;

