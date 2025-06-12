import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
  email:null,
  isOtpVerified: false,
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    // Forgot Password
    forgotPasswordRequest: (state) => {
      state.loading = true;
    
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.email=action.payload.email
    },
    forgotPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Verify OTP
    verifyOtpRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    verifyOtpSuccess: (state, action) => {
      state.loading = false;
      state.isOtpVerified = true;
      state.message = action.payload.message;
   
    },
    verifyOtpFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isOtpVerified = false;
    },

    // Reset Password
    resetPasswordRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;  
      state.isOtpVerified = false;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear State
    clearPasswordState: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
      state.isOtpVerified = false;
      state.email = null;
    },
  },
});

export const {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFail,
  verifyOtpRequest,
  verifyOtpSuccess,
  verifyOtpFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail,
  clearPasswordState,
} = passwordSlice.actions;

export default passwordSlice.reducer;
