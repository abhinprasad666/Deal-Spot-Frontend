import axiosInstance from "../../../api/axiosInstance";
import { createReviewFail, createReviewRequest, createReviewSuccess } from "../../slices/reviewsSlice";


export const createReview = (reviewData,productId) => async (dispatch) => {
    try {
        dispatch(createReviewRequest());
        console.log("my review",reviewData,productId)

        const { data } = await axiosInstance.post(`api/v1/review/${productId}`,reviewData);

        dispatch(createReviewSuccess(data));
        
    } catch (error) {
        console.error("Load user failed:", error.response?.data?.error || error.message);
        dispatch(createReviewFail(error.response?.data?.error || "Review not create !"));
    }
};
