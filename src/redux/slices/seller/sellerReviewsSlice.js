import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  sellerReviews:{},
  error:null
}

const sellerReviewslice = createSlice({
  name: 'sellerReviews',
  initialState,
  reducers: {
     getsellerReviewsRequest: (state) => {
      state.loading = true
    },
    getsellerReviewsSuccess: (state, action) => {
      state.loading = false
      state.sellerReviews=action.payload.reviews
     
    },
    getsellerReviewsFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {getsellerReviewsRequest,getsellerReviewsSuccess,getsellerReviewsFail}= sellerReviewslice.actions;

export default sellerReviewslice.reducer