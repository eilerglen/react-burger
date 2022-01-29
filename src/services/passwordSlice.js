import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { resetPasswordApi, forgotPasswordApi } from './api'


export const initialState = {
  isLoading: false,
  hasError: false,
  success: false,
  errorMessage: '',
  isEmailSuccess: false,
  isPasswordSuccess: false
}

export const forgotPassword = createAsyncThunk('password/forgot', async (email) => {
  const res = await forgotPasswordApi(email)
  if (res.success) {
    localStorage.setItem('isEmail', 'true')

  } else {
    
    throw new Error(res.message)
  }
  return res
})

export const resetPassword = createAsyncThunk('password/reset', async (form) => {
  const res = await resetPasswordApi(form)
  if (res.success) {
    localStorage.removeItem('isEmail', 'true')
  } 
  return res
})

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.errorMessage = ''
        state.isLoading = true
        state.hasError = false
        state.success = false
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.errorMessage = action.error.message
        state.isLoading = false
        state.hasError = true
        state.success = false
        state.isEmailSuccess = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.errorMessage = ''
        state.isLoading = false
        state.hasError = false
        state.success = true
        state.isPasswordSuccess = true
      })
      .addCase(forgotPassword.pending, (state) => {
        state.errorMessage = ''
        state.isLoading = true
        state.hasError = false
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.errorMessage = action.error.message
        state.isLoading = false
        state.hasError = true
        state.isEmailSuccess = false;

      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.errorMessage = ''
        state.isLoading = false
        state.hasError = false
        state.isEmailSuccess = true;
        state.isPasswordSuccess = false
      })
  },
})

export default passwordSlice.reducer