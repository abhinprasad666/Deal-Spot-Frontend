import React, { useRef, useState } from "react";
import {
    FaShoppingCart,
    FaHeart,
    FaBoxOpen,
    FaMapMarkerAlt,
    FaQuestionCircle,
    FaSignOutAlt,
    FaUserEdit,
    FaBell,
    FaGift,
    FaCreditCard,
    FaArrowLeft,
    FaCamera,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../../components/common/loaders/Loader";
import { uploadProfileImage } from "../../../../redux/actions/userProfileActions/uploadProfileIPicActions";
import { logout } from "../../../../redux/actions/authActions/logoutAction";
import { clearCartState } from "../../../../redux/slices/productSlices/cartSlice";
import userPlaceholder from "../../../../assets/icons/person.png";
import ButtonLoader from "../../../../components/common/loaders/ButtonLoader";

const UserProfilePage = () => {
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);
    const { isUploading } = useSelector((state) => state.userProfile);
    const fileInputRef = useRef(null);

    const [previewImage, setPreviewImage] = useState(user.profilePic || userPlaceholder);
    const [selectedImage, setSelectedImage] = useState(null);
    console.log("user profile pic", previewImage);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
            setSelectedImage(file);
        }
    };

    const handleUploadImage = () => {
        if (!selectedImage) return;

        const formData = new FormData();
        formData.append("image", selectedImage);

        dispatch(uploadProfileImage(formData));
        setSelectedImage(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCartState());
    };

    const isImageChanged = selectedImage !== null;

    return loading ? (
        <ButtonLoader bottomMessage={"Bringing up your account details..."} fullPage={true} message="Just a moment" />
    ) : (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center dark:bg-gray-900 ">
            <div className="w-full my-10 bg-white shadow-md rounded-2xl overflow-hidden border max-w-4xl dark:bg-gray-500  dark:text-white ">
                {/* Header */}
                <div className="flex flex-col items-center p-6 border-b relative bg-gradient-to-br from-pink-50 to-white  ">
                    {/* Back to Home */}
                    <Link
                        to="/"
                        className="absolute top-4 left-4 flex items-center space-x-1 text-sm text-pink-600 hover:text-pink-800 transition"
                    >
                        <FaArrowLeft />
                        <span>Back</span>
                    </Link>

                    {/* Profile Image */}
                    {isUploading ? (
                        <Loader message={"Please wait while we upload your image..."} />
                    ) : (
                        <div className="relative">
                            <img
                                src={previewImage}
                                alt="User Avatar"
                                className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-md object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                                onClick={handleImageClick}
                            />
                            <div
                                onClick={handleImageClick}
                                className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-pink-100 transition dark: dark:bg-gray-700"
                                title="Change photo"
                            >
                                <FaCamera className="text-pink-500 text-sm" />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                    )}

                    {/* Change/Upload Button */}
                    {isImageChanged && (
                        <button
                            onClick={handleUploadImage}
                            className={`mt-4 px-4 py-1 text-sm rounded-full font-medium shadow transition
                                ${
                                    selectedImage
                                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                                        : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                                }`}
                        >
                            {selectedImage ? "Upload Image" : "Change Image"}
                        </button>
                    )}

                    <h2 className="text-xl font-bold mt-3 text-gray-800">{user.name}</h2>
                    <p className="text-gray-700 text-sm">{user.email}</p>

                    <Link
                        to="/edit-profile"
                        className="absolute top-4 right-4 flex items-center space-x-2 bg-pink-100 text-pink-600 px-3 py-1 text-sm rounded-full hover:bg-pink-200 transition"
                    >
                        <FaUserEdit />
                        <span>Edit Profile</span>
                    </Link>
                </div>

                {/* Action Sections */}
                <div className="divide-y  ">
                    <Link to={"/cart"}>
                        <ProfileItem icon={<FaShoppingCart />} label="My Cart" />
                    </Link>
                    <ProfileItem icon={<FaHeart />} label="My Wishlist" />
                    <Link to={"/myOrders"}>
                        {" "}
                        <ProfileItem icon={<FaBoxOpen />} label="My Orders" />
                    </Link>
                    <ProfileItem icon={<FaMapMarkerAlt />} label="My Address" />
                    <ProfileItem icon={<FaCreditCard />} label="Saved Cards" />
                    <ProfileItem icon={<FaBell />} label="Notifications" />
                    <ProfileItem icon={<FaGift />} label="My Coupons" />
                </div>

                {/* Bottom Links */}
                <div className="mt-4 border-t">
                    <ProfileItem icon={<FaQuestionCircle />} label="Help & Support" />
                    <ProfileItem
                        icon={<FaSignOutAlt />}
                        label="Logout"
                        textColor="text-red-600"
                        hoverColor="hover:text-red-700"
                        onClick={handleLogout}
                    />
                </div>
            </div>
        </div>
    );
};

// Reusable Item Component
const ProfileItem = ({
    icon,
    label,
    textColor = "text-gray-200",
    hoverColor = "hover:text-pink-600",
    onClick = () => {},
}) => (
    <div
        onClick={onClick}
        className={`flex items-center space-x-4 p-4 cursor-pointer transition duration-200 ${hoverColor} hover:bg-pink-50 hover:shadow-sm dark:hover:bg-gray-800 rounded-lg mx-2 my-1`}
    >
        <div className="text-pink-500 text-xl">{icon}</div>
        <p className={`font-medium ${textColor}`}>{label}</p>
    </div>
);

export default UserProfilePage;
