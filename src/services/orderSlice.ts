import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOrder, TUser} from '../types/types'
import {sendOrderApi, refreshExpiredTokenApi} from '../services/api'

interface IinitialState {
    order: null | TOrder,
    isLoading: boolean,
    hasError: boolean,
    isSubmitOrderSuccess: boolean
}
interface IApiResponse {
    success: boolean;
    message?: string
    user?: TUser
    order: TOrder | Array<TOrder>
}

export const setOrder = createAsyncThunk('order/setOrder', async (ids: Array<string>) => {
    try {
        const response: IApiResponse = await sendOrderApi(ids)
        console.log(response)
        if(response && response.success) {
            return response.order
        }
        throw new Error(response.message)
    
    } catch(error) {
        console.log(error)
        if(error === 'jwt expired') {
            console.log(error)
            return await refreshExpiredTokenApi(sendOrderApi, ids)
        }
        console.log(`Catched and handled error: ${error}`)
        return Promise.reject(error)
    }     
})

export const initialState: IinitialState = {
    order: null,
    isLoading: false,
    hasError: false,
    isSubmitOrderSuccess: false, 
}
export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrder: (state) => {
            state.order = null
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
            state.order = null;
          })
    }
})

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;