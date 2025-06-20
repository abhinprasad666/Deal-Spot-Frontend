import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
  isUploading:false,
  update:false
  
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
  

    // Update Profile Info
    updateProfileRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.isUploading=true
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.isUploading=false
      state.update=true
      
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isUploading=false
    },

    // Upload Profile Image
    uploadImageRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.isUploading=true
    },
    uploadImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.isImageUpdated = true;
      state.isUploading=false
    },
    uploadImageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isImageUpdated = false;
      state.isUploading=false
    },


    // Clear All
    clearUserProfileState: (state) => {
     
        return {
    ...state,
    loading:false,
    error: null,
    message: null,
    update:null
  };
     
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
