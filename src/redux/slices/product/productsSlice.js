import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  products: [],
  error:null
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productRequest: (state) => {
      state.loading = true
    },
    productSuccess: (state, action) => {
      state.loading = false
      state.products = action.payload.products 
     
    },
    productFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {productRequest,productSuccess,productFail}=productSlice.actions;

export default productSlice.reducer