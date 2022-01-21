import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "../utils/utils";
import {TIngredientList} from '../types/types'

interface IIngredientsState {
    ingredients: TIngredientList;
    isLoading: boolean;
    hasError: boolean;
}
export const getIngredients = createAsyncThunk(
    'ingredients/getIngredients',
    async () => {        
        const response = await fetch (`${BASEURL}/ingredients`);
        if(!response.ok) {
            throw new Error('Failed response: ' + response)
        }
        const ingredients = await response.json();
        return ingredients.data
    }
)
export const initialState: IIngredientsState = {
    ingredients: [],
    isLoading: false,
    hasError: false,
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getIngredients.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
          })
        .addCase(getIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
            state.isLoading = false;
            state.hasError = false;
        })
        .addCase(getIngredients.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.ingredients = [];
          })         
    }
})

export default ingredientsSlice.reducer;