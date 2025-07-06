import {configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlices/productsSlice";
import product from "./slices/productSlices/singleProductSlice"
import categories from "./slices/productSlices/categoriesSlice"
import slides from "./slices/productSlices/sliderSlice"
import auth from "./slices/authSlice"
import password from "./slices/passwordSlice"
import userProfile from "./slices/userProfileSlice"
import review from "./slices/reviewsSlice"
import cart from "./slices/productSlices/cartSlice"
import order from "./slices/ordersSlice"

//seller
import status from "./slices/seller/sellerStatus"
import sellerProducts from "./slices/seller/sellerProducts"
import sellerOrdersList from "./slices/seller/orderListSlice"
export const store = configureStore({
    reducer: {
        products,
        product,
        categories,
        slides,
        auth,
        password,
        userProfile,
        review,
        cart,
        order,
        //seller
        status,
        sellerProducts,
        sellerOrdersList

    },
   
});
