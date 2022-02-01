import { createSlice } from "@reduxjs/toolkit";
import {TOrder} from '../types/types'

interface IinitialState {
  orders: Array<TOrder>,
  total: number,
  totalToday: number,
  hasError: boolean,
}

export const initialState: IinitialState = {
  orders: [],
  total: 0,
  totalToday: 0,
  hasError: false,
}
const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
  }
})