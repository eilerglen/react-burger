import { createSlice, createAction } from "@reduxjs/toolkit";
import { WS_AUTH_INIT,  WS_SEND_AUTH_MESSAGE} from './web-socket/constants/constants'
import { ISocketActions } from '../services/feedSlice'
import type {  PayloadAction } from '@reduxjs/toolkit'
import { TOrder } from '../types/types'


interface IinitialState {
  ordersAuth: Array<TOrder>,
  wsConnectedAuth: boolean,
  hasError: boolean,
}


export const initialState: IinitialState = {
  ordersAuth: [],
  wsConnectedAuth: false,
  hasError: false,

}

export const wsAuthInit = createAction<void>(WS_AUTH_INIT)
export const wsSendAuthMessage = createAction<string>( WS_SEND_AUTH_MESSAGE)

 const userFeedSlice = createSlice({
   name: 'userFeed',
   initialState,
   reducers: {
    wsConnectionSuccessAuth: (state) => {
      state.wsConnectedAuth = true
      state.hasError = false
    },
     wsConnectionErrorAuth:(state) => {
       state.wsConnectedAuth = false
       state.hasError = false
     },

     wsConnectionClosedAuth: (state) => {
      state.wsConnectedAuth = false
    },
    wsGetMessageAuth: (state, action) => {
      const { success, orders } = action.payload
      if(!success) {
        state.hasError = true
        return
      }
      state.hasError = false
      state.ordersAuth = orders
    },
  },
 })


 
 export default userFeedSlice.reducer
 export const {
  wsConnectionSuccessAuth, 
  wsConnectionErrorAuth, 
  wsConnectionClosedAuth, 
  wsGetMessageAuth } = userFeedSlice.actions

 export const wsActionsAuth: ISocketActions = {
  wsInit: wsAuthInit,
  wsSendMessage: wsSendAuthMessage,
  onOpen: wsConnectionSuccessAuth,
  onClose: wsConnectionErrorAuth,
  onError: wsConnectionClosedAuth,
  onMessage: wsGetMessageAuth,
}