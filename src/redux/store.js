// src/app/store.js
import {configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";
import product from "./slices/singleProductSlice"
import categories from "./slices/categoriesSlice"

export const store = configureStore({
    reducer: {
        products,
        product,
        categories
    },
    // middleware:[asyncThunkCreator]
});
