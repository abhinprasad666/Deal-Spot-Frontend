import axios from "axios";
import { resetPasswordRequest, resetPasswordSuccess, resetPasswordFail } from "../../slices/passwordSlice";

export const resetPassword = (newPassword) => async (dispatch) => {
    console.log("new password", newPassword);

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    dispatch(resetPasswordRequest());
    try {
        const { data } = await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/reset-password`,
            { password: newPassword },
            config
        );
        dispatch(resetPasswordSuccess(data));
    } catch (error) {
        dispatch(resetPasswordFail(error.response?.data?.error || "Failed to reset password"));
    }
};
