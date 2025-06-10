import axios from "axios";
import { categoriesFail, categoriesRequest, categoriesSuccess } from "../../slices/product/categoriesSlice";


export const getCategories = async (dispatch) => {

    dispatch(categoriesRequest());
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/category`);
        dispatch(categoriesSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(categoriesFail(error.response?.data?.error || "Something went wrong"));
    }
};
