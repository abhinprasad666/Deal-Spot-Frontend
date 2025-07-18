import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
 seller:{},
  error:null
}

const sellerDatalice = createSlice({
  name: 'sellerData',
  initialState,
  reducers: {
     getsellerDataRequest: (state) => {
      state.loading = true
    },
    getsellerDataSuccess: (state, action) => {
      state.loading = false
      state.seller=action.payload.sellerData
     
    },
    getsellerDataFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
     clearGetSellerData: (state) => {
      state.loading = false
      state.error=null
    },
  },
})

export const {getsellerDataRequest,getsellerDataSuccess,getsellerDataFail,clearGetSellerData}=sellerDatalice.actions;

export default sellerDatalice.reducer