import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  orders:[],
  error:null
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
     getOrderRequest: (state) => {
      state.loading = true
    },
    getOrderSuccess: (state, action) => {
      state.loading = false
      state.orders=action.payload.orders
     
    },
    getOrderFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {getOrderRequest,getOrderSuccess,getOrderFail}= orderSlice.actions;

export default orderSlice.reducer