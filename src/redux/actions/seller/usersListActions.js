import axiosInstance from "../../../api/axiosInstance";
import { getusersListFail, getusersListRequest, getusersListSuccess } from "../../slices/seller/getUsersSlice";






export const getUsersList= async (dispatch) => {

   
    dispatch(getusersListRequest());
    try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/seller/users`);
        dispatch(getusersListSuccess(data));
        console.log("seller users list",data)
    } catch (error) {
        console.log("error in get seller users", error);
        dispatch(getusersListFail(error.response?.data?.error || "get users list fail"));
    }
};
