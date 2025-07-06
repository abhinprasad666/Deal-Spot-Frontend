import axiosInstance from "../../../api/axiosInstance";
import { getOrdersListFail, getOrdersListRequest, getOrdersListSuccess } from "../../slices/seller/orderListSlice";





export const getSellerOrders= async (dispatch) => {

   
    dispatch(getOrdersListRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller/orders`);
        dispatch(getOrdersListSuccess(data));
        console.log("seller orders",data)
    } catch (error) {
        console.log("error in get seller orders", error);
        dispatch(getOrdersListFail(error.response?.data?.error || "get orders fail"));
    }
};
