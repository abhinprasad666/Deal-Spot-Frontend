import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { updateSellerProfile } from "../../../redux/actions/seller/sellerFrofileActions";
import { clearSellerProfileState } from "../../../redux/slices/seller/sellerProfileSlice";
import { showToast } from "../../../utils/toastUtils";
import { getSellerData } from "../../../redux/actions/seller/getSellerInfoActions";
import { FaEdit } from "react-icons/fa";
import ButtonLoader from "../../common/ButtonLoader";
const UpdateSellerProfile = () => {
    const navigate = useNavigate();
    const { seller, error } = useSelector((state) => state.sellerData);
    const { loading, updateProfile } = useSelector((state) => state.sellerProfile);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Set form values from Redux store when seller data is loaded
    useEffect(() => {
        if (seller && Object.keys(seller).length > 0) {
            reset({
                shopName: seller.shopName || "",
                bio: seller.bio || "",
                address: seller.address || "",
                gstNumber: seller.gstNumber || "",
            });
        }
    }, [seller, reset]);

    const onSubmit = (data) => {
        console.log("Updated Seller Data:", data);
        dispatch(updateSellerProfile(data));
    };
    useEffect(() => {
        if (error) {
            showToast(`${error}`, "error", "api-error");
            dispatch(clearSellerProfileState());
        }
        if (updateProfile) {
            showToast(`${updateProfile}`, "success", "api-error");
            dispatch(clearSellerProfileState());
            setTimeout(() => {
                dispatch(getSellerData);
            }, 5000);
        }
    }, [error, dispatch, updateProfile]);
    return (
        <div className="max-w-4xl mx-auto p-6 mt-4 bg-white rounded shadow flex flex-col md:flex-row gap-8 dark:bg-gray-600">
            {/* Left: Info Box */}
            <div className="md:w-1/3 flex flex-col items-center justify-center text-center bg-gray-100 rounded p-6 dark:bg-gray-800">
                <UserCircleIcon className="h-24 w-24 text-gray-500 mb-4 " />
                <h3 className="text-lg font-semibold">Update Your Profile</h3>
                <p className="text-gray-600 mt-2 text-sm">Keep your shop details up to date for better visibility.</p>
                <button
                    onClick={() => navigate("/seller/profile")}
                    className="mt-6 px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 text-black rounded"
                >
                    Back to Profile
                </button>
            </div>

            {/* Right: Form */}
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Edit Seller Details</h2>
                {loading ? (
                    <p className="text-gray-500 dark:text-gray-400">Loading seller details...</p>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block font-medium">Shop Name</label>
                            <input
                                {...register("shopName", { required: "Shop name is required" })}
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                            {errors.shopName && <p className="text-red-500 text-sm">{errors.shopName.message}</p>}
                        </div>

                        <div>
                            <label className="block font-medium">Bio</label>
                            <textarea
                                {...register("bio", { maxLength: 500 })}
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Address</label>
                            <input
                                {...register("address", { required: "Address is required" })}
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>

                        <div>
                            <label className="block font-medium">GST Number</label>
                            <input {...register("gstNumber")} className="w-full border px-3 py-2 rounded mt-1" />
                        </div>

                        <div className="flex justify-end gap-4 pt-2">
                            <button
                                type="button"
                                onClick={() => navigate("/seller/dashboard")}
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center items-center gap-2 ${
                                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                } text-white font-semibold py-3 rounded-lg transition`}
                            >
                                <FaEdit />{" "}
                                {loading ? <ButtonLoader size={6} color="#fff" message="Updating" /> : "Update Profile"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UpdateSellerProfile;
