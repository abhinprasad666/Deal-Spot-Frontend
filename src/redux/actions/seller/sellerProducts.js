import axiosInstance from "../../../api/axiosInstance";
import { getSellerProductsFail, getSellerProductsRequest, getSellerProductsSuccess } from "../../slices/seller/sellerProducts";





export const getSellerProducts= async (dispatch) => {

   
    dispatch(getSellerProductsRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product/my`);
        dispatch(getSellerProductsSuccess(data));
        console.log("seller products",data)
    } catch (error) {
        console.log("error in get seller products", error);
        dispatch(getSellerProductsFail(error.response?.data?.error || "get seller products fail"));
    }
};
