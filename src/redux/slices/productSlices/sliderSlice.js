import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
 slides: [],
  error:null
}

const slideSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
   sliderRequest: (state) => {
      state.loading = true
    },
   sliderSuccess: (state, action) => {
      state.loading = false
      state.slides= action.payload.slides
     
    },
   sliderFail: (state,action) => {
      state.loading = false
      state.error=action.payload
      
    },
  },
})

export const {sliderSuccess,sliderRequest,sliderFail}=slideSlice.actions;

export default slideSlice.reducer