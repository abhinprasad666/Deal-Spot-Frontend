import axios from "axios";
import { productFail, productRequest, productSuccess } from "../../slices/productSlices/productsSlice";

export const getProducts = (keyword) => async (dispatch) => {
    dispatch(productRequest());

    try {
        const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/api/v1/product`;

        const url = keyword && keyword.trim() ? `${baseUrl}?keyword=${keyword.trim()}` : baseUrl;

        const { data } = await axios.get(url);
        dispatch(productSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(productFail(error.response?.data?.error || "Something went wrong"));
    }
};
