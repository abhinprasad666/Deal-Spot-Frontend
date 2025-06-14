import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
  isUpdated: false,
  isImageUpdated: false,
  imgUploading:false
  
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
  

    // Update Profile Info
    updateProfileRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.isUpdated = true;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },

    // Upload Profile Image
    uploadImageRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.imgUploading=true
    },
    uploadImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.isImageUpdated = true;
      state.imgUploading=false
    },
    uploadImageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isImageUpdated = false;
      state.imgUploading=false
    },

    // Reset Flags
    resetUpdateStatus: (state) => {
      state.isUpdated = false;
      state.isImageUpdated = false;
    },

    // Clear All
    clearUserProfileState: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
      state.isUpdated = false;
      state.isImageUpdated = false;
    },
  },
});

export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFail,
  uploadImageRequest,
  uploadImageSuccess,
  uploadImageFail,
  resetUpdateStatus,
  clearUserProfileState,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
