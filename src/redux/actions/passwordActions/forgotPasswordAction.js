import axios from "axios";
import {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFail,
} from "../../slices/passwordSlice";

export const forgotPassword = (formData) => async (dispatch) => {
  console.log("Forgot password email:", formData);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  dispatch(forgotPasswordRequest());

  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/forgot-password`,
      formData,
      config
    );

    dispatch(forgotPasswordSuccess(data));
    
  } catch (error) {
    dispatch(
      forgotPasswordFail(
        error.response?.data?.error || "Something went wrong"
      )
    );
  }
};
