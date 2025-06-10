import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  product:{},
  error:null
}

const singleproductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
     singleProductRequest: (state) => {
      state.loading = true
    },
    singleProductSuccess: (state, action) => {
      state.loading = false
      state.product=action.payload.product
     
    },
    singleProductFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {singleProductFail,singleProductRequest,singleProductSuccess}= singleproductSlice.actions;

export default singleproductSlice.reducer