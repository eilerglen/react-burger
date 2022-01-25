import {setCookie} from '../utils/cookie'
import { 
  getUserApi,
  loginRequestApi, 
  refreshExpiredTokenApi, 
  registerRequestApi,
  updateUserApi } from './api';
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
    console.log('Login success, ' + res.user.name)
    return res
  } else {
    return Promise.reject(res.message)
  }
})

export const register = createAsyncThunk('auth/register', async (form) => {
  const res = await registerRequestApi(form)
  if (res && res.success) {
    console.log('register success' + res.user)
    return res.user
  } else {
    return Promise.reject(res.message)
  }
})

export const updateUser = createAsyncThunk('auth/updateUser', async(form) => {
  try {
    const res = await updateUserApi(form)

    if(res && res.success) {
      localStorage.setItem('userName', res.user.name)
      console.log('update success', res)
      return res.user
    }
    throw new Error(res)
  }
  catch(error) {
    if(error.message === 'jwt expired') {
      console.log(error.message)
      await refreshExpiredTokenApi(getUserApi, null)
      return Promise.reject(error.message)
    }
    console.log(`Catched and handled error: "${error.message}"`)
  }
})

export const authSlice = createSlice({
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
        state.user = initialState.user
        state.isLoading = false
        state.hasError = true
        state.isAuthorized = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isLoading = false
        state.hasError = true
        state.isAuthorized = true
        
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.hasError = false
        
        
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.hasError = true
        
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false
        state.hasError = false
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false
        state.hasError = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
        state.hasError = false
      })
  }

})

export default authSlice.reducer;