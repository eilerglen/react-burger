import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOrder, TAllOrderList, TUser} from '../types/types'
import {
    sendOrderApi, 
    getAllOrdersApi, 
    refreshExpiredTokenApi, 
    getUserOrdersApi,
    getOrderByIdApi } from '../services/api'

interface IinitialState {
    allOrders: TAllOrderList,
    userOrders: TAllOrderList,
    orderToShow: {} | TOrder
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

export const getOrders = createAsyncThunk('order/getOrders', async () => {
    try {
        const response: IApiResponse = await getAllOrdersApi()
        if(response && response.success) {
            console.log(response)
            return response
        }
        throw new Error(response.message)
    }
    catch(error) {
        if(error === 'jwt expired') {
            console.log(error)
            return await refreshExpiredTokenApi(getAllOrdersApi, '')
        }
        console.log(`Catched and handled error: ${error}`)
        return Promise.reject(error)
    }

})

export const getUserOrders = createAsyncThunk('order/getUserOrders', async()=> {
    try {
        const response: IApiResponse = await getUserOrdersApi()
        if (response && response.success) {
            console.log(response)
            return response
        }
        throw new Error(response.message)
    } catch (error: any) {
    if (error.message === 'jwt expired') {
      console.log(error.message)
      return await refreshExpiredTokenApi(getUserOrdersApi, '')
    }
    console.log(`Catched and hadled error: "${error.message}"`)
    return Promise.reject(error.message)
  }
})

export const getOrderById = createAsyncThunk('orders/getOrderById', async(id: string) => {
    try {
        const response: IApiResponse= await getOrderByIdApi(id)
        if (response && response.success) {
          console.log(response)
          return response
        }
        throw new Error(response.message)
      } catch (error: any) {
        if (error.message === 'jwt expired') {
          console.log(error.message)
          return await refreshExpiredTokenApi(getOrderByIdApi, id)
        }
        console.log(`Catched and hadled error: "${error.message}"`)
        return Promise.reject(error.message)
      }
})

export const initialState: IinitialState = {
    allOrders: [],
    userOrders: [],
    orderToShow: {},
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
        setOrderToShow: (state, action) => {
            state.orderToShow = action.payload
        },
        resetOrderToShow: (state) => {
            state.orderToShow = {}
        }
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
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true
            state.hasError = false
          })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.allOrders = action.payload.orders
            
            state.isLoading = false
            state.hasError = false
          })
        .addCase(getOrders.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
          })
          .addCase(getUserOrders.pending, (state) => {
            state.isLoading = true
            state.hasError = false
          })
          .addCase(getUserOrders.fulfilled, (state, action) => {
            state.userOrders = action.payload.orders
            state.isLoading = false
            state.hasError = false
          })
          .addCase(getUserOrders.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
            state.userOrders = []
          }) 
          .addCase(getOrderById.pending, (state) => {
            state.isLoading = true
            state.hasError = false
          })
          .addCase(getOrderById.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasError = false
          })
          .addCase(getOrderById.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
          })     
    }
})

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;