import axiosInstance from "../../api/axiosInstance";
import { getOrderFail, getOrderRequest, getOrderSuccess } from "../slices/ordersSlice";



export const getMyOrders= async (dispatch) => {

   
    dispatch(getOrderRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/order`);
        dispatch(getOrderSuccess(data));
        console.log("my orders",data)
    } catch (error) {
        console.log("error in get orders", error);
        dispatch(getOrderFail(error.response?.data?.error || "get order fail"));
    }
};
