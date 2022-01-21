import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TIngredient} from '../types/types'

interface IIngredientToShow {
    ingredientShow: TIngredient | null;
}
export const initialState: IIngredientToShow = {
    ingredientShow: null
}
export const ingredientDetailsSlice = createSlice({
    name: 'ingredientDetails',
    initialState,
    reducers: {
        setIngredientDetails: (state, action: PayloadAction<TIngredient>) => {
            state.ingredientShow = action.payload;
        },
        resetIngredientDetails: (state) => {
            state.ingredientShow = null;
        } 
    },
})

export const { setIngredientDetails, resetIngredientDetails } = ingredientDetailsSlice.actions;

export default ingredientDetailsSlice.reducer;