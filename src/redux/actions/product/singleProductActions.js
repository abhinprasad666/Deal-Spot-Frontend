import axios from "axios";
import { singleProductFail, singleProductRequest, singleProductSuccess } from "../../slices/product/singleProductSlice";

export const getProduct= id=> async (dispatch) => {

    console.log("params eeeeid",id)
    dispatch(singleProductRequest());
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product/single/${id}`);
        dispatch(singleProductSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(singleProductFail(error.response?.data?.error || "Something went wrong"));
    }
};
