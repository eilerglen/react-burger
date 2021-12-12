import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import orderReducer from "./orderSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        order: orderReducer,
        cart: cartReducer,
        modal: modaLReducer,

    },
    devTools: true,

});

export default store;