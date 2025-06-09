// src/app/store.js
import { asyncThunkCreator, configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";

export const store = configureStore({
    reducer: {
        products,
    },
    // middleware:[asyncThunkCreator]
});
