import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryProductsLoading: null,
    categoryProductsError: null,
    categoryProducts: [],
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        //get single category
        categoryProductsRequest: (state) => {
            state.categoryProductsLoading = true;
        },
        categoryProductsSuccess: (state, action) => {
            state.categoryProductsLoading = false;
            state.categoryProducts = action.payload;
        },
        categoryProductsFail: (state, action) => {
            state.categoryProductsLoading = false;
            state.categoryProductsError = action.payload;
        },
        clearCategoryProducts: (state) => {
            state.categoryProductsLoading = false;
            state.categoryProductsError = null;
        },
    },
});

export const { categoryProductsRequest, categoryProductsSuccess, categoryProductsFail,clearCategoryProducts } = categoriesSlice.actions;

export default categoriesSlice.reducer;
