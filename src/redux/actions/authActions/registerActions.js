// src/redux/actions/auth/registerAction.js
import axios from "axios";
import { registerFail, registerRequest, registerSuccess } from "../../slices/authSlice";


export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signup`,
      formData,
      config
    );

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response?.data?.error || "Registration failed"));
  }
};
