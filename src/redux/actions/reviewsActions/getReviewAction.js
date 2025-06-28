import axiosInstance from "../../../api/axiosInstance";
import { getReviewsFail, getReviewsRequest, getReviewsSuccess } from "../../slices/reviewsSlice";

export const getReviewsAction = (productId) => async (dispatch) => {
    try {
        dispatch(getReviewsRequest());

        const { data } = await axiosInstance.get(`api/v1/review/${productId}`);

        dispatch(getReviewsSuccess(data));
    } catch (error) {
        console.error("Load user failed:", error.response?.data?.error || error.message);
        dispatch(getReviewsFail(error.response?.data?.error || "Review not fount !"));
    }
};
