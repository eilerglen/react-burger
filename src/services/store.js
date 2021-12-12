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