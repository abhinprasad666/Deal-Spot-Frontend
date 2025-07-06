import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    sellerProducts: [],
    error: null,
    productMessage: null,
    deleteMessage:null,
    editMessage:null
};

const sellerProductslice = createSlice({
    name: "sellerProducts",
    initialState,
    reducers: {
        //get seller products
        getSellerProductsRequest: (state) => {
            state.loading = true;
        },
        getSellerProductsSuccess: (state, action) => {
            state.loading = false;
            state.sellerProducts = action.payload.products;
        },
        getSellerProductsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //add product
        addProductRequest: (state) => {
            state.loading = true;
            console.log("add product request", state.loading);
            state.error = null;
            state.productMessage = null;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.productMessage = action.payload.message;
        },
        addProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //delete product
        deleteProductRequest: (state) => {
            state.loading = true;
         
        },
        deleteProductSuccess: (state, action) => {
            state.loading = false;
            state.productMessage = action.payload.deletedProduct
;
            state.deleteMessage=true
        },
        deleteProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.deleteMessage=null
        },
        //clear message
        clearProductMessage: (state) => {
            state.loading = false;
            state.productMessage = null;
        },
    },
});

export const {
    //get product
    getSellerProductsRequest,
    getSellerProductsSuccess,
    getSellerProductsFail,
    // add product
    addProductRequest,
    addProductSuccess,
    addProductFail,
    //delete product
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFail,
    //clear product message
    clearProductMessage,
} = sellerProductslice.actions;

export default sellerProductslice.reducer;
