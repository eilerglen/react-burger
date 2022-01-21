import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "../utils/utils";
import { TOrder} from '../types/types'

interface IinitialState {
    order: {} | TOrder,
    isLoading: boolean,
    hasError: boolean,
    isSubmitOrderSuccess: boolean
}

export const setOrder = createAsyncThunk(
    'order/setOrder',
    async (ids: Array<string>) => {
        const response = await fetch(`${BASEURL}/orders`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: ids
            })
        })
        if (!response.ok) {
            throw new Error('Fetch error')
        }
        const order = await response.json()
        return order;
    }
);

export const initialState: IinitialState = {
    order: {},
    isLoading: false,
    hasError: false,
    isSubmitOrderSuccess: false, 
}
export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrder: (state) => {
            state.order = {}
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(setOrder.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(setOrder.fulfilled, (state, action) => {
            state.order = action.payload;
            state.isLoading = false;
            state.hasError = false;
            state.isSubmitOrderSuccess = true;
        })
        .addCase(setOrder.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.order = {};
          })
    }
})

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;