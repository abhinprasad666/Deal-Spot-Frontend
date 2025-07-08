import axiosInstance from "../../../api/axiosInstance";
import { sellerRegisterFail, sellerRegisterRequest, sellerRegisterSuccess } from "../../slices/seller/sellerRegisterSlice";

export const sellerRegisterAction = registerData=>async (dispatch) => {
    dispatch(sellerRegisterRequest());
    try {
        const { data } = await axiosInstance.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller`,registerData);
        dispatch(sellerRegisterSuccess(data));
    } catch (error) {
        console.log("error in get seller register", error);
        dispatch(sellerRegisterFail(error.response?.data?.error || "seller register fail"));
    }
};
