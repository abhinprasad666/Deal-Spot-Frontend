import React from "react";
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
} from "react-icons/fa";

const UserProfilePage = () => {
  // Dummy user data
  const user = {
    name: "Abhinprasad",
    email: "abhin@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center p-6 border-b relative">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-sm"
          />
          <h2 className="text-xl font-bold mt-3 text-gray-800">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <button className="absolute top-4 right-4 flex items-center space-x-2 bg-pink-100 text-pink-600 px-3 py-1 text-sm rounded-full hover:bg-pink-200 transition">
            <FaUserEdit />
            <span>Edit Profile</span>
          </button>
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

const ProfileItem = ({
  icon,
  label,
  textColor = "text-gray-700",
  hoverColor = "hover:text-pink-600",
}) => (
  <div
    className={`flex items-center space-x-4 p-4 cursor-pointer transition duration-200 ${hoverColor}`}
  >
    <div className="text-pink-500 text-xl">{icon}</div>
    <p className={`font-medium ${textColor}`}>{label}</p>
  </div>
);

export default UserProfilePage;
