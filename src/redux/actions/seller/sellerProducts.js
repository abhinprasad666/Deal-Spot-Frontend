import axios from "axios";
import axiosInstance from "../../../api/axiosInstance";
import { addProductFail, addProductRequest, addProductSuccess, getSellerProductsFail, getSellerProductsRequest, getSellerProductsSuccess } from "../../slices/seller/sellerProducts";



//get seller products

export const getSellerProducts= async (dispatch) => {

   
    dispatch(getSellerProductsRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product/my`);
        dispatch(getSellerProductsSuccess(data));
    } catch (error) {
        console.log("error in get seller products", error);
        dispatch(getSellerProductsFail(error.response?.data?.error || "get seller products fail"));
    }
};

//add new product

export const createProduct=  productData=>async (dispatch) => {

    console.log("add product data",productData)
   
    dispatch(addProductRequest());
    try {
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product`, productData, config);
            
        dispatch(addProductSuccess(data));
        console.log("seller add  product",data)
    } catch (error) {
        console.log("error in  seller add product", error);
        dispatch(addProductFail(error.response?.data?.error || "add product fail"));
    }
};
