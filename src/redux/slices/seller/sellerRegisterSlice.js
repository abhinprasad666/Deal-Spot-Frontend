import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  isRegister:null,
  error:null
}

const sellerRegisterSlice = createSlice({
  name: 'sellerRegister',
  initialState,
  reducers: {
     sellerRegisterRequest: (state) => {
      state.loading = true
    },
    sellerRegisterSuccess: (state, action) => {
      state.loading = false
      state.isRegister=action.payload.message
     
    },
    sellerRegisterFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
    clearSellerRegisterState: (state) => {
      state.loading = false
      state.error=null
      state.isRegister=null           
    },
  },
})

export const {sellerRegisterRequest,sellerRegisterSuccess,sellerRegisterFail,clearSellerRegisterState}=sellerRegisterSlice.actions;

export default sellerRegisterSlice.reducer