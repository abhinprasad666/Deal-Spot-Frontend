import {configureStore } from "@reduxjs/toolkit";
import products from "./slices/product/productsSlice";
import product from "./slices/product/singleProductSlice"
import categories from "./slices/product/categoriesSlice"
import slides from "./slices/product/sliderSlice"


export const store = configureStore({
    reducer: {
        products,
        product,
        categories,
        slides,
    },
   
});
