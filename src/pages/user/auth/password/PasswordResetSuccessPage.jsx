import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPasswordState } from "../../../../redux/slices/passwordSlice";
import { FaCheckCircle } from "react-icons/fa";

const PasswordResetSuccessPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.removeItem("otpStartTime");
        dispatch(clearPasswordState());
        navigate("/login");
    };

    const handleHome = () => {
        localStorage.removeItem("otpStartTime");
        dispatch(clearPasswordState());
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
            <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                    <FaCheckCircle className="text-green-500 text-5xl" />
                </div>

                <h2 className="text-2xl font-bold text-green-600 mb-2">Password Reset Successful!</h2>
                <p className="text-gray-600 mb-6">
                    Your password has been updated. You can now log in with your new credentials.
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleLogin}
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                        Continue to Login
                    </button>
                    <button
                        onClick={handleHome}
                        className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetSuccessPage;
