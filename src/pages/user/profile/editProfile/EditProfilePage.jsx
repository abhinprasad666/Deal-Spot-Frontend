import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "../../../../redux/actions/userProfileActions/updateProfileActions";
import Loader from "../../../../components/common/Loader";
import { clearUserProfileState } from "../../../../redux/slices/userProfileSlice";

const EditProfilePage = () => {
    const { user } = useSelector((state) => state.auth);
    const { isUploading, error, message, update } = useSelector((state) => state.userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            name: user.name,
            email: user.email,
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const watchCurrent = watch("currentPassword");
    const watchNew = watch("newPassword");
    const watchConfirm = watch("confirmPassword");
    const anyPasswordFilled = watchCurrent || watchNew || watchConfirm;

    const onSubmit = (data) => {
        const { confirmPassword, ...updatedData } = data;
        dispatch(updateProfile(updatedData));
    };
    useEffect(() => {
        if (update || error) {
            const timer = setTimeout(() => {
                dispatch(clearUserProfileState());
            }, 2000); // 2000 milliseconds = 2 seconds

            return () => clearTimeout(timer); // Cleanup on unmount or update
        }
    }, [dispatch, update, error]);

    return (
        <div className="mt-12">
            {isUploading ? (
                <Loader message={"Updating your information. This may take a moment."} />
            ) : (
                <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
                    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-5 dark:bg-gray-700">
                        {/* Back Button */}
                        <button
                            onClick={() => {
                                navigate("/user-profile");
                            }}
                            className="flex items-center text-pink-600 hover:underline mb-5 text-sm"
                        >
                            <FaArrowLeft className="mr-2" /> Back to Profile
                        </button>

                        {/* Error */}
                        {error && (
                            <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-300 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Success */}
                        {message && (
                            <div className="mb-4 p-3 rounded bg-green-100 text-green-700 border border-green-300 text-sm">
                                {message}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 font-medium dark:text-gray-200">Name</label>
                                <input
                                    type="text"
                                    autoComplete="name"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-medium dark:text-gray-200">Email</label>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Current Password */}
                            <div>
                                <label className="block text-gray-700 font-medium dark:text-gray-200">Current Password</label>
                                <div className="relative">
                                    <input
                                        type={showCurrent ? "text" : "password"}
                                        autoComplete="current-password"
                                        {...register("currentPassword", {
                                            validate: () =>
                                                !anyPasswordFilled || watchCurrent.length >= 8 || "At least 8 characters",
                                        })}
                                        className="w-full mt-1 px-3 py-2 border rounded pr-10"
                                    />
                                    <span
                                        onClick={() => setShowCurrent(!showCurrent)}
                                        className="absolute top-3 right-3 cursor-pointer text-gray-500 dark:text-gray-200"
                                    >
                                        {showCurrent ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.currentPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>
                                )}
                            </div>

                            {/* New Password */}
                            <div>
                                <label className="block text-gray-700 font-medium dark:text-gray-200">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showNew ? "text" : "password"}
                                        autoComplete="new-password"
                                        {...register("newPassword", {
                                            validate: () =>
                                                !anyPasswordFilled || watchNew.length >= 8 || "At least 8 characters",
                                        })}
                                        className="w-full mt-1 px-3 py-2 border rounded pr-10"
                                    />
                                    <span
                                        onClick={() => setShowNew(!showNew)}
                                        className="absolute top-3 right-3 cursor-pointer text-gray-500 dark:text-gray-200"
                                    >
                                        {showNew ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.newPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-gray-700 font-medium dark:text-gray-200">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirm ? "text" : "password"}
                                        autoComplete="new-password"
                                        {...register("confirmPassword", {
                                            validate: () =>
                                                !anyPasswordFilled || watchConfirm === watchNew || "Passwords do not match",
                                        })}
                                        className="w-full mt-1 px-3 py-2 border rounded pr-10"
                                    />
                                    <span
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        className="absolute top-3 right-3 cursor-pointer text-gray-500 dark:text-gray-200"
                                    >
                                        {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditProfilePage;
