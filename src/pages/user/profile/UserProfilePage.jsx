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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/common/Loader";

const UserProfilePage = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const [previewImage, setPreviewImage] = useState(user.profilePic);
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
        }
    };
    console.log("my image url",previewImage)

    return loading ? (
        <Loader />
    ) : (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
            <div className="w-full my-10 bg-white shadow-md rounded-2xl overflow-hidden border max-w-4xl">
                {/* Header */}
                <div className="flex flex-col items-center p-6 border-b relative bg-gradient-to-br from-pink-50 to-white">
                    {/* Back to Home */}
                    <Link
                        to="/"
                        className="absolute top-4 left-4 flex items-center space-x-1 text-sm text-pink-600 hover:text-pink-800 transition"
                    >
                        <FaArrowLeft />
                        <span>Back</span>
                    </Link>

                    {/* Profile Image with camera overlay */}
                    <div className="relative">
                        <img
                            src={previewImage}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-md object-cover cursor-pointer"
                            onClick={handleImageClick}
                        />
                        <div
                            onClick={handleImageClick}
                            className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md cursor-pointer"
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

                    <h2 className="text-xl font-bold mt-3 text-gray-800">{user.name}</h2>
                    <p className="text-gray-500 text-sm">{user.email}</p>

                    <Link
                        to="/edit-profile"
                        className="absolute top-4 right-4 flex items-center space-x-2 bg-pink-100 text-pink-600 px-3 py-1 text-sm rounded-full hover:bg-pink-200 transition"
                    >
                        <FaUserEdit />
                        <span>Edit Profile</span>
                    </Link>
                </div>

                {/* Action Sections */}
                <div className="divide-y">
                    <ProfileItem icon={<FaShoppingCart />} label="My Cart" />
                    <ProfileItem icon={<FaHeart />} label="My Wishlist" />
                    <ProfileItem icon={<FaBoxOpen />} label="My Orders" />
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
                    />
                </div>
            </div>
        </div>
    );
};

const ProfileItem = ({ icon, label, textColor = "text-gray-700", hoverColor = "hover:text-pink-600" }) => (
    <div className={`flex items-center space-x-4 p-4 cursor-pointer transition duration-200 ${hoverColor}`}>
        <div className="text-pink-500 text-xl">{icon}</div>
        <p className={`font-medium ${textColor}`}>{label}</p>
    </div>
);

export default UserProfilePage;
