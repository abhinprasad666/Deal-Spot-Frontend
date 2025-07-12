import axiosInstance from "../../../api/axiosInstance";
import {
    categoryProductsFail,
    categoryProductsRequest,
    categoryProductsSuccess,
} from "../../slices/productSlices/categoryProductsSlice";


export const getSingleCategoryProducts = (id) => async (dispatch) => {
    dispatch(categoryProductsRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product/category/${id}`);

        dispatch(categoryProductsSuccess(data));
    } catch (error) {
        console.log("error in get single category products", error);
        dispatch(categoryProductsFail(error.response?.data?.error || "single category products faild"));
    }
};
