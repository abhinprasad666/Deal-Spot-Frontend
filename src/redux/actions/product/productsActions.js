import axios from "axios";
import { productFail, productRequest, productSuccess } from "../../slices/product/productsSlice";

export const getProducts = keyword => async (dispatch) => {
    
    dispatch(productRequest());
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product?keyword=${keyword}`);
        dispatch(productSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(productFail(error.response?.data?.error || "Something went wrong"));
    }
};
