// src/app/store.js
import {configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";
import product from "./slices/singleProductSlice"

export const store = configureStore({
    reducer: {
        products,
        product
    },
    // middleware:[asyncThunkCreator]
});
