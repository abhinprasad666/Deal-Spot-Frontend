import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  categories: [],
  error:null,

}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesRequest: (state) => {
      state.loading = true
      state.categoryLoading=true
    },
    categoriesSuccess: (state, action) => {
      state.loading = false
      state.categoryLoading=false
      state.categories = action.payload.categories 
     
    },
    categoriesFail: (state,action) => {
      state.categoryLoading=false
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {categoriesSuccess,categoriesRequest,categoriesFail}=categoriesSlice.actions;

export default categoriesSlice.reducer