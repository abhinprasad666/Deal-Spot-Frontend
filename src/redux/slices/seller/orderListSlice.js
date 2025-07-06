import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
 orders:[],
  error:null
}

const sellerOrderslice = createSlice({
  name: 'sellerOrders',
  initialState,
  reducers: {
     getOrdersListRequest: (state) => {
      state.loading = true
    },
    getOrdersListSuccess: (state, action) => {
      state.loading = false
      state.orders=action.payload.orders
     
    },
    getOrdersListFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {getOrdersListRequest,getOrdersListSuccess,getOrdersListFail}=sellerOrderslice.actions;

export default sellerOrderslice.reducer