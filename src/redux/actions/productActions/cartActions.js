import axiosInstance from "../../../api/axiosInstance";
import {
    addCartFail,
    addCartRequest,
    addCartSuccess,
    clearCartFail,
    clearCartRequest,
    clearCartSuccess,
    decrementCartFail,
    decrementRequest,
    decrementSuccess,
    deleteItemCartFail,
    deleteItemRequest,
    deleteItemSuccess,
    getCartFail,
    getCartRequest,
    getCartSuccess,
    incrementCartFail,
    incrementRequest,
    incrementSuccess,
} from "../../slices/productSlices/cartSlice";

//  GET USER CART
export const getCart = async (dispatch) => {
    dispatch(getCartRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/cart`);
        dispatch(getCartSuccess(data));
    
    } catch (error) {
        console.log("error in getCart", error);
        dispatch(getCartFail(error.response?.data?.error || "Cart request failed"));
    }
};

//  ADD TO CART
export const addToCart = (cartData) => async (dispatch) => {
    dispatch(addCartRequest());
    try {
        const { data } = await axiosInstance.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/cart/add`, cartData);
        dispatch(addCartSuccess(data));
    } catch (error) {
        console.log("error in addToCart", error);
        dispatch(addCartFail(error.response?.data?.error || "Add to cart failed"));
    }
};

//  increment Quantity
export const incremntQuantity = (productId) => async (dispatch) => {
    dispatch(incrementRequest());
    try {
        const { data } = await axiosInstance.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/cart/increment/${productId}`);

        dispatch(incrementSuccess(data));
    } catch (error) {
        console.log("error in addToCart", error);
        dispatch(incrementCartFail(error.response?.data?.error || "increment quantity faild"));
    }
};

// decrement quantity

export const decrementQuantity = (productId) => async (dispatch) => {
    dispatch(decrementRequest());
    try {
        await axiosInstance.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/cart/decrement/${productId}`);

        dispatch(decrementSuccess());
    } catch (error) {
        console.log("error in addToCart", error);
        dispatch(decrementCartFail(error.response?.data?.error || "decrement quantity faild"));
    }
};

//remove cart item
export const deleteCartItem = (productId) => async (dispatch) => {
    dispatch(deleteItemRequest());
    try {
        await axiosInstance.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/cart/delete/${productId}`);

        dispatch(deleteItemSuccess());
    } catch (error) {
        console.log("error in addToCart", error);
        dispatch(deleteItemCartFail(error.response?.data?.error || "delete cart item faild"));
    }
};

//clear cart

export const clearCart = async (dispatch) => {
    dispatch(clearCartRequest());
    try {
        await axiosInstance.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/cart/clear`);

        dispatch(clearCartSuccess());
    } catch (error) {
        console.log("error in addToCart", error);
        dispatch(clearCartFail(error.response?.data?.error || "clear cart faild"));
    }
};
