import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../utils/toastUtils";
import { clearSellerRegisterState } from "../../redux/slices/seller/sellerRegisterSlice";
import { sellerRegisterAction } from "../../redux/actions/seller/sellerRegisterActions";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../common/ButtonLoader";

const RegisterAsSeller = () => {
    const { loading, error, isRegister } = useSelector((state) => state.sellerRegister);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Seller Registration Data:", data);
        dispatch(sellerRegisterAction(data));
    };

    useEffect(() => {
        if (error) {
            return showToast(`${error}`, "error", "get seller data");
        }
        if (isRegister) {
            navigate("/welcome/seller");
            dispatch(clearSellerRegisterState());
        }
    }, [dispatch, error, isRegister, navigate]);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            {/* Left Side */}
            <div className="md:w-1/2 bg-green-100 flex flex-col justify-center items-start p-10 text-left space-y-6">
                <h2 className="text-4xl font-extrabold text-green-800">Become a Seller</h2>
                <p className="text-gray-700 text-lg">
                    Join our marketplace and turn your passion into profit. We provide the tools and support you need to
                    succeed.
                </p>
                <ul className="text-gray-700 text-base list-disc list-inside space-y-1">
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
            <div className="md:w-1/2 flex items-center justify-center p-8 bg-white shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Seller Registration</h2>

                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            autoComplete="email"
                            placeholder="Enter your current registered email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            className="w-full border px-4 py-2 rounded mt-1"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter your current password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className="w-full border px-4 py-2 rounded mt-1"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Shop Name</label>
                        <input
                            {...register("shopName", { required: "Shop name is required" })}
                            placeholder="Your shop name"
                            className="w-full border px-4 py-2 rounded mt-1"
                        />
                        {errors.shopName && <p className="text-red-500 text-sm mt-1">{errors.shopName.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Business Address</label>
                        <input
                            {...register("address", { required: "Address is required" })}
                            placeholder="Your full business address"
                            className="w-full border px-4 py-2 rounded mt-1"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">GST Number</label>
                        <input
                            {...register("gstNumber")}
                            placeholder="GST Number (optional)"
                            className="w-full border px-4 py-2 rounded mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white py-2 rounded-md transition flex justify-center items-center 
    ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                    >
                        {loading ? <ButtonLoader size={6} color="#fff" message=" Registering" /> : "  Register as Seller"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterAsSeller;
