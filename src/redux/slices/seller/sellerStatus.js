import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  status:{},
  error:null
}

const statuslice = createSlice({
  name: 'status',
  initialState,
  reducers: {
     getStatusRequest: (state) => {
      state.loading = true
    },
    getStatusSuccess: (state, action) => {
      state.loading = false
      state.status=action.payload.status
     
    },
    getStatusFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {getStatusRequest,getStatusSuccess,getStatusFail}= statuslice.actions;

export default statuslice.reducer