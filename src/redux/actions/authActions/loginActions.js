import axios from "axios";
import { loginFail, loginRequest, loginSuccess } from "../../slices/authSlice";


export const loginUser = (userdata) => async (dispatch) => {
    try {
        console.log("my user data....", userdata);

        dispatch(loginRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true, // to receive cookies
        };

        const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`, userdata, config);

        dispatch(loginSuccess(data));
    } catch (error) {
        console.log("Login failed error response:", error.response?.data);

        if (Array.isArray(error.response?.data?.errors)) {
            const messages = error.response.data.errors.map((e) => e.msg).join(", ");
            dispatch(loginFail(messages));
        } else {
            dispatch(loginFail(error.response?.data?.error || "Login failed"));
        }
    }
};
