import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartLoading: false,
    cartItems: [],
    cartError: null,
    cartSuccess: false,
    shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : null,
    msg: null,
    clearCartLoading:false,


};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Get cart
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

        // Add to cart
        addCartRequest: (state) => {
            state.cartLoading = true;
        },
        addCartSuccess: (state, action) => {
            state.cartLoading = false;
            state.cartItems = action.payload;
            state.cartError = null;
            state.cartSuccess = true;
            state.msg = "Added to Cart";
        },
        addCartFail: (state, action) => {
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },

        // Increment quantity
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

        // Decrement quantity
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

        // Delete item
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

        // Clear cart
        clearCartRequest: (state) => {
            state.cartLoading = true;
            state.clearCartLoading=true
        },
        clearCartSuccess: (state) => {
            state.clearCartLoading=false
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = true;
        },
        clearCartFail: (state, action) => {
            state.clearCartLoading=false
            state.cartLoading = false;
            state.cartError = action.payload;
            state.cartSuccess = false;
        },

        // Save shipping info to localStorage and redux
        saveShippingInfo: (state, action) => {
            localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
            state.shippingInfo = action.payload;
        },

        // Clear shipping info from localStorage and redux
        clearShippingInfo: (state) => {
            localStorage.removeItem("shippingInfo");
            state.shippingInfo =null;
        },

        // Clear all cart state
        clearCartState: (state) => {
            state.cartLoading = false;
            state.cartError = null;
            state.cartSuccess = false;
            state.shippingInfo = null;
            state.cartItems = [];
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
    clearShippingInfo,
    clearCartState,
} = cartSlice.actions;

export default cartSlice.reducer;
