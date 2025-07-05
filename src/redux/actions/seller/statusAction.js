import axiosInstance from "../../../api/axiosInstance";
import { getStatusFail, getStatusRequest, getStatusSuccess } from "../../slices/seller/sellerStatus";




export const getSellerStatus= async (dispatch) => {

   
    dispatch(getStatusRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller/status`);
        dispatch(getStatusSuccess(data));
        console.log("seller status",data)
    } catch (error) {
        console.log("error in get seller status", error);
        dispatch(getStatusFail(error.response?.data?.error || "get status fail"));
    }
};
