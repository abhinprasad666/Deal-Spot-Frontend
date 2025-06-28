import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    message: null,
    reviews: [],
    uploadReview:null
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        // Get all reviews
        getReviewsRequest: (state) => {
            state.loading = true;
        },
        getReviewsSuccess: (state, action) => {
            state.loading = false;
            state.reviews = action.payload.reviews;
        },
        getReviewsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Add new review
        createReviewRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.uploadReview=null;
        },
        createReviewSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.uploadReview=true;
        },
        createReviewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.uploadReview=null;
        },

        // Delete review
        deleteReviewRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteReviewSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.reviews = state.reviews.filter((review) => review._id !== action.payload.reviewId);
        },
        deleteReviewFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Clear state
        clearReviewState: (state) => {
            state.error = null;
            state.message = null;
            state.uploadReview=null
        },
    },
});

export const {
    getReviewsRequest,
    getReviewsSuccess,
    getReviewsFail,
    createReviewRequest,
    createReviewSuccess,
    createReviewFail,
    deleteReviewRequest,
    deleteReviewSuccess,
    deleteReviewFail,
    clearReviewState,
} = reviewSlice.actions;

export default reviewSlice.reducer;
