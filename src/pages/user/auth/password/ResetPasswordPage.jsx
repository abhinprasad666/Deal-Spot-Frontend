import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../../redux/actions/passwordActions/resetPasswordAction";
import { useEffect, useState } from "react";
import logo from "../../../../../public/favicon.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from "../../../../components/common/Loader";

const ResetPasswordPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, success, error, email } = useSelector((state) => state.password);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (!email) {
            navigate("/forgot-password");
        }
        if (error) {
            navigate("/reset-error");
        }
    }, [email, navigate, error]);

    useEffect(() => {
        if (success) {
            navigate("/password-reset-success");
        }
    }, [success, navigate]);

    const onSubmit = ({ newPassword }) => {
        dispatch(resetPassword(newPassword));
        navigate("/password-update-success");
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4 dark:bg-gray-900 ">
                    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 dark:bg-gray-500 ">
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <img src={logo} alt="DealSpot Logo" className="w-12 h-12 rounded-full" />
                        </div>

                        <h1 className="text-center text-xl font-bold text-pink-600 mb-1">DealSpot</h1>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Reset Your Password</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* New Password */}
                            <div className="relative">
                                <label className="block text-gray-700 font-medium mb-1">New Password</label>
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    {...register("newPassword", {
                                        required: "New password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters",
                                        },
                                    })}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                                        errors.newPassword ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                                <span
                                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                    onClick={() => setShowNewPassword((prev) => !prev)}
                                >
                                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {errors.newPassword && (
                                    <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) => value === watch("newPassword") || "Passwords do not match",
                                    })}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                                        errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                                <span
                                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-2 text-white font-semibold rounded-lg transition duration-200 ${
                                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                                }`}
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </form>

                        <div className="text-sm text-center mt-6 text-gray-600">
                            <span
                                onClick={() => navigate("/login")}
                                className="text-pink-600 font-medium hover:underline cursor-pointer"
                            >
                                🔐 Back to Login
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResetPasswordPage;
