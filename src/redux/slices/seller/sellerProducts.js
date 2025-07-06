import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  sellerProducts:[],
  error:null,
  productMessage:null
}

const sellerProductslice = createSlice({
  name: 'sellerProducts',
  initialState,
  reducers: {
    //get seller products
     getSellerProductsRequest: (state) => {
      state.loading = true
    },
    getSellerProductsSuccess: (state, action) => {
      state.loading = false
      state.sellerProducts=action.payload.products
     
    },
    getSellerProductsFail: (state,action) => {
      state.loading =false
      state.error=action.payload
    },
    //add product
      addProductRequest: (state) => {
      state.loading = true
      console.log("add product request",state.loading)
      state.error=null
      state.productMessage=null
    },
     addProductSuccess: (state, action) => {
      state.loading = false
      state.productMessage=action.payload.message

     
    },
    addProductFail: (state,action) => {
      state.loading = false
      state.error=action.payload
   
    },
    
    //clear message
      clearProductMessage: (state) => {
      state.loading = false
      state.productMessage=null
    },
  },
})

export const {
  //get product
  getSellerProductsRequest,
  getSellerProductsSuccess,
  getSellerProductsFail,
  // add product
  addProductRequest,
  addProductSuccess,
  addProductFail,

  //clear product message
  clearProductMessage
}= sellerProductslice.actions;

export default sellerProductslice.reducer