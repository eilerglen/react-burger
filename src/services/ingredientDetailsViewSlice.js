import { createSlice } from '@reduxjs/toolkit';

export const ingredientDetailsViewSlice = createSlice({
    name: 'ingredientDetailsView',
    initialState: {
        ingredientDetailsView: {},
    },

    reducers: {
        setIngredientDetailsView: (state, action) => {
            state.ingredientDetailsView = action.payload;
        },
        resetIngredientDetailsView: (state) => {
            state.ingredientDetailsView= {};
        } 
    },
})

export const { setIngredientDetailsView, resetIngredientDetailsView } = ingredientDetailsViewSlice.actions;

export default ingredientDetailsViewSlice.reducer;