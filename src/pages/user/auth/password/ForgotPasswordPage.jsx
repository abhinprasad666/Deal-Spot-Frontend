import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../../../../public/favicon.png";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../../redux/actions/passwordActions/forgotPasswordAction";
import { showToast } from "../../../../utils/toastUtils";
import Loader from "../../../../components/common/Loader";


const ForgotPasswordPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, message, loading } = useSelector((state) => state.password);

    useEffect(() => {
        if (message) {
            showToast(message, "success");
            navigate("/verify-otp");
        }
    }, [message, navigate]);

    useEffect(() => {
        if (error) {
            navigate("/reset-error");
        }
    }, [error, navigate]);

    const onSubmit = async (data) => {
        dispatch(forgotPassword(data));
    };

    return (
        <div>
            {loading ? (
                <Loader message="Verifying your request and sending OTP..." />
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-gray-900 ">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 dark:bg-gray-800 ">
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <img src={logo} alt="Deal-Spot Logo" className="w-12 h-12 rounded-full" />
                        </div>

                        {/* Company Name */}
                        <h1 className="text-center text-xl font-bold text-pink-600 mb-1">Deal-Spot</h1>

                        {/* Page Title */}
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Forgot Password</h2>

                        {/* Short Description */}
                        <p className="text-sm text-center text-gray-500 mb-6">
                            Enter your registered email address. We’ll send you a verification OTP to reset your password.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-400 ">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`w-full px-4 py-2 border ${
                                        errors.email ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email",
                                        },
                                    })}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                            >
                                GET OTP
                            </button>
                        </form>

                        {/* Navigation Links */}
                        <div className="mt-6 flex justify-between text-sm text-gray-600">
                            <p
                                onClick={() => navigate("/login")}
                                className="text-blue-600 hover:text-blue-800 hover:underline font-medium cursor-pointer transition duration-150"
                            >
                                Back to Login
                            </p>
                            <p
                                onClick={() => navigate("/")}
                                className="text-green-600 hover:text-green-800 hover:underline font-medium cursor-pointer transition duration-150"
                            >
                                Back to Home
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordPage;
