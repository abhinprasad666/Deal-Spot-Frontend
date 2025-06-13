import axiosInstance from "../../../api/axiosInstance";
import { loadUserSuccess, logoutFail, logoutRequest } from "../../slices/authSlice";

export const loadUser = () => async (dispatch) => {
    try {
        dispatch(logoutRequest());

        axiosInstance.get("api/v1/auth/logout");

        dispatch(loadUserSuccess());
    } catch (error) {
        console.error("Load user failed:", error.response?.data?.error || error.message);
        dispatch(logoutFail(error.response?.data?.error || "User not fount !"));
    }
};
