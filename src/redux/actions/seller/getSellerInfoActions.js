import axiosInstance from "../../../api/axiosInstance";
import { getsellerDataFail, getsellerDataRequest, getsellerDataSuccess } from "../../slices/seller/getSellerInfo";






export const getSellerData= async (dispatch) => {

   
    dispatch(getsellerDataRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller`);
        dispatch(getsellerDataSuccess(data));
  
    } catch (error) {
        console.log("error in get seller data", error);
        dispatch(getsellerDataFail(error.response?.data?.error || "get seller data fail"));
    }
};
