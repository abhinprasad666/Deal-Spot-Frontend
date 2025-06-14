import axiosInstance from "../../../api/axiosInstance";
import { clearUserProfileState, updateProfileFail, updateProfileRequest, updateProfileSuccess } from "../../slices/userProfileSlice";



export const updateProfile = (updateData) => async (dispatch) => {
    console.log('profile upload data',updateData)
    try {
        dispatch(clearUserProfileState())
        dispatch(updateProfileRequest());

       const {data}=await axiosInstance.put("api/v1/user",updateData);

        dispatch(updateProfileSuccess(data));
    } catch (error) {
        console.error("Load user failed:", error.response?.data?.error || error.message);
        dispatch(updateProfileFail(error.response?.data?.error || " Profile upload faild !"));
    }
};
