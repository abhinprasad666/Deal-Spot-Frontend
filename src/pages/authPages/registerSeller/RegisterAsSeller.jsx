import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Mail, Lock, Eye, EyeOff, Store, MapPin, FileText } from "lucide-react";

import { showToast } from "../../../utils/toastUtils";
import { clearSellerRegisterState } from "../../../redux/slices/seller/sellerRegisterSlice";
import { sellerRegisterAction } from "../../../redux/actions/seller/sellerRegisterActions";
import ButtonLoader from "../../../components/common/loaders/ButtonLoader";

const RegisterAsSeller = () => {
    const { loading, error, isRegister } = useSelector((state) => state.sellerRegister);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(sellerRegisterAction(data));
    };

    useEffect(() => {
        if (error) {
            showToast(`${error}`, "error", "get seller data");
            dispatch(clearSellerRegisterState());
        }
        if (isRegister) {
            navigate("/welcome/seller");
            dispatch(clearSellerRegisterState());
        }
    }, [dispatch, error, isRegister, navigate]);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 mt-10">
            {/* Left Side */}
            <div className="md:w-1/2 bg-green-100 flex flex-col justify-center items-start p-10 text-left space-y-6 dark:bg-gray-800 text-black">
                <h2 className="text-4xl font-extrabold text-green-800 dark:text-green-600">Become a Seller</h2>
                <p className="text-gray-700 text-lg dark:text-white">
                    Join our marketplace and turn your passion into profit. We provide the tools and support you need to
                    succeed.
                </p>
                <ul className="text-gray-700 text-base list-disc list-inside space-y-1 dark:text-gray-200">
                    <li>Reach thousands of customers every day</li>
                    <li>Manage your shop and inventory easily</li>
                    <li>Track your sales with real-time analytics</li>
                    <li>Zero listing fees – only pay when you sell</li>
                    <li>Dedicated seller support 24/7</li>
                    <li>Grow your business with ease and confidence</li>
                    <li>Trusted by top-rated sellers across India</li>
                </ul>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2 flex items-center justify-center p-8 bg-white shadow-lg dark:bg-gray-900">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Seller Registration</h2>

                    {/* Email */}
                    <div>
                        <label className="block font-medium dark:text-white">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type="email"
                                autoComplete="email"
                                placeholder="Enter your registered email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full border px-10 py-2 rounded mt-1"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-medium dark:text-white">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                                })}
                                className="w-full border px-10 py-2 rounded mt-1 pr-10"
                            />
                            <span
                                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Shop Name */}
                    <div>
                        <label className="block font-medium dark:text-white">Shop Name</label>
                        <div className="relative">
                            <Store className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                {...register("shopName", { required: "Shop name is required" })}
                                placeholder="Your shop name"
                                className="w-full border px-10 py-2 rounded mt-1"
                            />
                        </div>
                        {errors.shopName && <p className="text-red-500 text-sm mt-1">{errors.shopName.message}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block font-medium dark:text-white">Business Address</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                {...register("address", { required: "Address is required" })}
                                placeholder="Your full business address"
                                className="w-full border px-10 py-2 rounded mt-1"
                            />
                        </div>
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>

                    {/* GST Number */}
                    <div>
                        <label className="block font-medium dark:text-white">GST Number</label>
                        <div className="relative">
                            <FileText className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                {...register("gstNumber")}
                                placeholder="GST Number (optional)"
                                className="w-full border px-10 py-2 rounded mt-1"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white py-2 rounded-md transition flex justify-center items-center 
              ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                    >
                        {loading ? (
                            <ButtonLoader
                                message="Welcome aboard, partner!"
                                bottomMessage="We’re setting up your Deal-Spot seller portal."
                                fullPage={true}
                            />
                        ) : (
                            "Register as Seller"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterAsSeller;
