import axios from "axios";
import axiosInstance from "../../../api/axiosInstance";
import { addProductFail, addProductRequest, addProductSuccess, deleteProductFail, deleteProductRequest, deleteProductSuccess, getSellerProductsFail, getSellerProductsRequest, getSellerProductsSuccess, updateProductFail, updateProductRequest, updateProductSuccess } from "../../slices/seller/sellerProductsSlice";



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

//delete product

export const deleteProduct= productId=> async (dispatch) => {

   console.log("product id delete",productId)
    dispatch(deleteProductRequest());
    try {
        const { data } = await axiosInstance.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product/${productId}`);
        dispatch(deleteProductSuccess(data));
        console.log("delete data name ",data)
    } catch (error) {
        console.log("error in get seller delete product", error);
        dispatch(deleteProductFail(error.response?.data?.error || "Seller delete product fail"));
    }
};

//edit product
export const updateProduct=  (productId,productData)=>async (dispatch) => {

    console.log("update product id",productId)
     console.log("update product data",productData)
   
    dispatch(updateProductRequest());
    try {
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/product/${productId}`, productData, config);
            
        dispatch(updateProductSuccess(data));
        console.log("seller edit product  product",data)
    } catch (error) {
        console.log("error in  seller edit product", error);
        dispatch(updateProductFail(error.response?.data?.error || "Edit product fail"));
    }
};
