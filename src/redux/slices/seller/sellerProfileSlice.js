import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    loadingDp: false,
    loadingCover: false,
    uploadProfileDp: null,
    upoladCoverImg: null,
    updateProfile: null,

    error: null,
};

const sellerProfileSlice = createSlice({
    name: "sellerProfile",
    initialState,
    reducers: {
        //upoad cover image
        uploadCoverRequest: (state) => {
            state.loadingCover = true;
            state.upoladCoverImg = null;
        },
        uploadCoverSuccess: (state,action) => {
            state.loadingCover = false;
            state.upoladCoverImg =action.payload.message;
        },
        uploadCoverFail: (state, action) => {
            state.loadingCover = false;
            state.error = action.payload;
            state.upoladCoverImg = null;
        },
        //upoad seller dp
        uploadDpRequest: (state) => {
            state.loadingDp = true;
            state.uploadProfileDp = null;
        },
        uploadDpSuccess: (state,action) => {
            state.loadingDp = false;
            state.uploadProfileDp = action.payload.message;
        },
        uploadDpFail: (state, action) => {
            state.loadingDp = false;
            state.error = action.payload;
            state.uploadProfileDp = null;
        },
        //update profile
         updateSellerProfileRequest: (state) => {
            state.loading = true;
        },
        updateSellerProfileSuccess: (state,action) => {
            state.loading = false;
            state.updateProfile = action.payload.message;
        },
        updateSellerProfileFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        //clear profile state
        clearSellerProfileState: (state) => {
            (state.loading = false),
                (state.uploadProfileDp = null),
                (state.upoladCoverImg = null),
                (state. updateProfile = null),
                (state.loadingDp = false),
                (state.loadingCover = false),
                (state.error = null);
        },
    },
});

export const {
    //upload cover image
    uploadCoverRequest,
    uploadCoverSuccess,
    uploadCoverFail,
    //upload dp
    uploadDpRequest,
    uploadDpSuccess,
    uploadDpFail,
    //update profile
   updateSellerProfileRequest,
   updateSellerProfileSuccess,
    updateSellerProfileFail,
    //clear state
    clearSellerProfileState,
} = sellerProfileSlice.actions;

export default sellerProfileSlice.reducer;
