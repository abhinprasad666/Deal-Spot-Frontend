import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../../../components/common/Loader";

const EditProfilePage = () => {
    const { user, loading } = useSelector((state) => state.auth);
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

    const watchCurrent = watch("currentPassword");
    const watchNew = watch("newPassword");
    const watchConfirm = watch("confirmPassword");

    const anyPasswordFilled = watchCurrent || watchNew || watchConfirm;

    const onSubmit = (data) => {
        const { confirmPassword, ...updatedData } = data;
        console.log("Updated Profile Data:", updatedData);
    };

    return loading ? (
        <Loader />
    ) : (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/user-profile")}
                    className="flex items-center text-pink-600 hover:underline mb-6"
                >
                    <FaArrowLeft className="mr-2" /> Back to Profile
                </button>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            autoComplete="name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full mt-1 px-3 py-2 border rounded"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
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
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Current Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">Current Password</label>
                        <input
                            type="password"
                            autoComplete="current-password"
                            {...register("currentPassword", {
                                validate: () =>
                                    !anyPasswordFilled ||
                                    watchCurrent.length >= 6 ||
                                    "Current password must be at least 6 characters",
                            })}
                            className="w-full mt-1 px-3 py-2 border rounded"
                        />
                        {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>}
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">New Password</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            {...register("newPassword", {
                                validate: () =>
                                    !anyPasswordFilled ||
                                    watchNew.length >= 6 ||
                                    "New password must be at least 6 characters",
                            })}
                            className="w-full mt-1 px-3 py-2 border rounded"
                        />
                        {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            {...register("confirmPassword", {
                                validate: () => {
                                    if (!anyPasswordFilled) return true;
                                    if (watchConfirm !== watchNew) return "Passwords do not match";
                                    return true;
                                },
                            })}
                            className="w-full mt-1 px-3 py-2 border rounded"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfilePage;
