import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartLoading: false,
    cartItems: [],
    cartError: null,
    cartSuccess: false,
    shippingInfo:localStorage.getItem("shippingInfo")?JSON.parse(localStorage.getItem("shippingInfo")):{},
    msg:null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //get cart
        getCartRequest: (state) => {
            state.cartLoading = true;
        },
        getCartSuccess: (state, action) => {
            state.cartLoading = false;
            state.cartItems = action.payload;
            state.cartError = null;
        },
        getCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
        },

        //add to cart
        addCartRequest: (state) => {
            state.cartLoading = true;
        },
        addCartSuccess: (state, action) => {
            state.cartLoading = false;
            state.cartItems = action.payload;
            state.cartError = null;
            state.cartSuccess = true;
            state.msg="Adedd to Cart"
        },
        addCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },
        //increment quantity
        incrementRequest: (state) => {
            state.cartLoading = true;
        },
        incrementSuccess: (state) => {
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = true;
        },
        incrementCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },
        decrementRequest: (state) => {
            state.cartLoading = true;
        },
        decrementSuccess: (state) => {
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = true;
        },
        decrementCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },
        //delete item
        deleteItemRequest: (state) => {
            state.cartLoading = true;
        },
        deleteItemSuccess: (state) => {
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = true;
        },
        deleteItemCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },
        //clear cart
        clearCartRequest: (state) => {
            state.cartLoading = true;
        },
        clearCartSuccess: (state) => {
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = true;
        },
        clearCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },
        //save shippingInfo
          saveShippingInfo: (state, action) => {
         state.shippingInfo= localStorage.setItem("shippingInfo",JSON.stringify(action.payload))
        },
          clearCartState: (state) => {
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = false;
            state.shippingInfo=null
            state.cartItems= []
        },
        
    },
});

export const {
    getCartRequest,
    getCartSuccess,
    getCartFail,
    addCartRequest,
    addCartSuccess,
    addCartFail,
    incrementRequest,
    incrementSuccess,
    incrementCartFail,
    decrementRequest,
    decrementSuccess,
    decrementCartFail,
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemCartFail,
    clearCartRequest,
    clearCartSuccess,
    clearCartFail,
    saveShippingInfo,
    clearCartState
} = cartSlice.actions;

export default cartSlice.reducer;
