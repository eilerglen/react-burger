import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAction, createSlice } from "@reduxjs/toolkit";
import { TOrder } from '../types/types'
import { getOrders } from '../services/orderSlice'
import { WS_INIT, WS_SEND_MESSAGE } from './web-socket/constants/constants'

interface IinitialState {
  orders: Array<TOrder>,
  total: number | null,
  totalToday: number | null,
  wsConnected: boolean,
  hasError: boolean,
}

export const initialState: IinitialState = {
  orders: [],
  total: null,
  totalToday: null,
  wsConnected: false,
  hasError: false,
}


export const wsInit = createAction<void>(WS_INIT)
export const wsSendMessage = createAction<string>(WS_SEND_MESSAGE)

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    wsConnectionSuccess: (state) => {
      state.wsConnected = true
      state.hasError = false
    },
    wsConnectionError: (state) => {
      state.wsConnected = false
      state.hasError = true
    },
    wsConnectionClosed: (state) => {
      state.wsConnected = false
    },
    wsGetMessage: (state, action) => {
      const { orders, total, totalToday, success } = action.payload
      // if (!success) {
      //   state.hasError = true
      //   return
      // }
      state.orders = orders
      state.total = total
      state.totalToday = totalToday
    },
  },

})

export default feedSlice.reducer
export const { 
  wsConnectionSuccess, 
  wsConnectionError, 
  wsConnectionClosed, 
  wsGetMessage 
  } = feedSlice.actions

export interface ISocketActions {
  wsInit: ActionCreatorWithoutPayload<string>
  wsSendMessage: ActionCreatorWithPayload<string, string>
  onOpen: ActionCreatorWithoutPayload<string>
  onClose: ActionCreatorWithoutPayload<string>
  onError: ActionCreatorWithPayload<string, string> | ActionCreatorWithoutPayload<string>
  onMessage: ActionCreatorWithPayload<any, string>
}

export const wsActions: ISocketActions = {
  wsInit,
  wsSendMessage,
  onOpen: wsConnectionSuccess,
  onClose: wsConnectionError,
  onError:  wsConnectionClosed,
  onMessage: wsGetMessage, 
}