import {configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlices/productsSlice";
import product from "./slices/productSlices/singleProductSlice"
import categories from "./slices/productSlices/categoriesSlice"
import slides from "./slices/productSlices/sliderSlice"
import auth from "./slices/authSlice"

export const store = configureStore({
    reducer: {
        products,
        product,
        categories,
        slides,
        auth
    },
   
});
