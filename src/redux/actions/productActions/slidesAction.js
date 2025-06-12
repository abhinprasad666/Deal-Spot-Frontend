import axios from "axios";
import { sliderFail, sliderRequest, sliderSuccess } from "../../slices/productSlices/sliderSlice";



export const getSlides = async (dispatch) => {
    dispatch(sliderRequest());
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/slide`);
        dispatch(sliderSuccess(data));
    } catch (error) {
        console.log("error in getProduct", error);
        dispatch(sliderFail(error.response?.data?.error || "Something went wrong"));
        console.log("hello")
    }
};
