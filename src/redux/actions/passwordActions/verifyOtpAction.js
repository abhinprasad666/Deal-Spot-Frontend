import axios from "axios";
import { verifyOtpRequest, verifyOtpSuccess, verifyOtpFail } from "../../slices/passwordSlice";

export const verifyOtp = (otp) => async (dispatch) => {
    console.log("action otp", otp);
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    dispatch(verifyOtpRequest());
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/verifyOtp`, otp, config);
        dispatch(verifyOtpSuccess(data));
    } catch (error) {
        dispatch(verifyOtpFail(error.response?.data?.error || "Invalid OTP"));
    }
};
