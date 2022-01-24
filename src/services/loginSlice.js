import {setCookie} from '../utils/cookie'
import { loginRequestApi } from './api';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthorized: false,
  user: {
    name: '',
    email: '',
  },
  isLoading: false,
  hasError: false
}

export const login = createAsyncThunk('auth/login', async (form) => {
  const res = await loginRequestApi(form)
  if (res && res.success) {
    setCookie('token', res.accessToken, {path: '/'})
    localStorage.setItem('token', res.refreshToken)
    localStorage.setItem('userName', res.user.name)
    console.log('login success, ' + res.user.name)
    return res
  } else {
    return Promise.reject(res.message)
  }
})
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.hasError = false
        state.isAuthorized = false
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.hasError = true
        state.isAuthorized = false
        state.user = initialState.user
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isLoading = false
        state.hasError = true
        state.isAuthorized = true
        
      })
  }

})

export default loginSlice.reducer;