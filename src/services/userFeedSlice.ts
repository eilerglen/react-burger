import { createSlice } from "@reduxjs/toolkit";
type TinitialOrders = [];

interface IinitialState {
  orders: TinitialOrders,
  wsConnected: boolean,
  hasError: boolean,
}

export const initialState: IinitialState = {
  orders: [],
  wsConnected: false,
  hasError: false,

}

 const userFeedSlice = createSlice({
   name: 'userFeed',
   initialState,
   reducers: {
     wsConnectionError:(state, action) => {
       state.wsConnected = false
       state.hasError = action.payload
     },

     wsConnectionClosed: (state) => {
      state.wsConnected = false
    },
    wsGetMessage: (state, action) => {
      const { orders, success } = action.payload
      if (!success) {
        state.hasError = true
        return
      }
      state.hasError = false
      state.orders = orders
    },
  },
 })

 export default userFeedSlice.reducer
