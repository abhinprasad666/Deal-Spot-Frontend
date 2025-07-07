import axiosInstance from "../../../api/axiosInstance";
import { getsellerReviewsFail, getsellerReviewsRequest, getsellerReviewsSuccess } from "../../slices/seller/sellerReviewsSlice";


export const getSellerReviewsList = async (dispatch) => {
    dispatch(getsellerReviewsRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/review/seller/allReviews`);
        dispatch(getsellerReviewsSuccess(data));
        console.log("seller reviews", data);
    } catch (error) {
        console.log("error in get seller reviews", error);
        dispatch(getsellerReviewsFail(error.response?.data?.error || "get seller reviews fail"));
    }
};
