import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  sellerProducts:[],
  error:null
}

const sellerProductslice = createSlice({
  name: 'sellerProducts',
  initialState,
  reducers: {
     getSellerProductsRequest: (state) => {
      state.loading = true
    },
    getSellerProductsSuccess: (state, action) => {
      state.loading = false
      state.sellerProducts=action.payload.products
     
    },
    getSellerProductsFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {getSellerProductsRequest,getSellerProductsSuccess,getSellerProductsFail}= sellerProductslice.actions;

export default sellerProductslice.reducer