import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/toastUtils";
import { loginUser } from "../../../redux/actions/authActions/loginActions";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, isAuthenticated, loginMessage } = useSelector((state) => state.auth);
    const location = useLocation();

    // const redirect=location.search?'/'+location.search.split('=')[1]:'/'
    const redirect = location.state?.redirect || "/";

    useEffect(() => {
  
        if (isAuthenticated) {
       
            navigate(redirect);

            if (loginMessage) {
                showToast("Login successful!", "success");
            }
        }
    }, [isAuthenticated, navigate, loginMessage, redirect]);

    // Show error if any
    useEffect(() => {
        if (error) {
            showToast(`${error}`, "error", "api-error");
        }
    }, [error]);

    const onSubmit = (data) => {
        console.log("Login data:", data);
        dispatch(loginUser(data));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">Login</h2>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="login-email" className="block font-semibold mb-1">
                        Email
                    </label>
                    <input
                        id="login-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="login-password" className="block font-semibold mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? "👁️" : "🙈"}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Forgot Password */}
                <div className="mb-6 text-right">
                    <Link to="/forgot-password" className="text-sm text-pink-500 hover:underline">
                        Forgot password?
                    </Link>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
                >
                    Login
                </button>

                {/* Register Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-pink-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>

                {/* Back to Home Link */}
                <div className="mt-4 text-center">
                    <Link to="/" className="inline-block text-sm text-gray-600 hover:text-pink-600 underline transition">
                        Skip for now
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
