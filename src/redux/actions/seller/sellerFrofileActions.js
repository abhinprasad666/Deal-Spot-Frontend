import axios from "axios";
import {
    updateSellerProfileFail,
    updateSellerProfileRequest,
    updateSellerProfileSuccess,
    uploadCoverFail,
    uploadCoverRequest,
    uploadCoverSuccess,
    uploadDpFail,
    uploadDpRequest,
    uploadDpSuccess,
} from "../../slices/seller/sellerProfileSlice";
import axiosInstance from "../../../api/axiosInstance";

export const uploadSellerCover = (image) => async (dispatch) => {
    console.log("seller cover action", image);

    dispatch(uploadCoverRequest());
    try {
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/seller/upload/coverImage`,
            image,
            config
        );

        dispatch(uploadCoverSuccess(data));
    } catch (error) {
        console.log("error in  seller Profile upload cover ", error);
        dispatch(uploadCoverFail(error.response?.data?.error || "seller Profile upload cover faild"));
    }
};

export const uploadSellerDp = (image) => async (dispatch) => {
    console.log("seller cover action", image);

    dispatch(uploadDpRequest());
    try {
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller/upload/dp`, image, config);

        dispatch(uploadDpSuccess(data));
    } catch (error) {
        console.log("error in  seller Profile upload dp ", error);
        dispatch(uploadDpFail(error.response?.data?.error || "seller Profile upload dp faild"));
    }
};

//update profile

export const updateSellerProfile = updateData=> async (dispatch) => {
    dispatch(updateSellerProfileRequest());
    try {
        const { data } = await axiosInstance.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller`,updateData);
        dispatch(updateSellerProfileSuccess(data));
    } catch (error) {
        console.log("error in update seller profile", error);
        dispatch(updateSellerProfileFail(error.response?.data?.error || "update seller profile fail"));
    }
};
