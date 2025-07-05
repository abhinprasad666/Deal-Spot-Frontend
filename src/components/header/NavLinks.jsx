// NavLinks.jsx
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function NavLinks({ isLoggedIn, user, userImage, isDark, cartCount }) {
  return (
    <div className="hidden md:flex items-center gap-4 font-medium">
      {user?.role === "seller" ? (
        <Link
          to="/seller/dashboard"
          className="text-[8px] lg:text-[15px] bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-pink-100 transition duration-200"
        >
          Seller Dashboard
        </Link>
      ) : (
        <Link
          to="/become-seller"
          className="bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-pink-100 transition duration-200"
        >
          Become a Seller
        </Link>
      )}

      <Link to="/cart" className="relative hover:opacity-80 transition flex items-center text-white">
        <ShoppingCart size={20} />
        {cartCount && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>

      {isLoggedIn ? (
        <ProfileDropdown userImage={userImage} />
      ) : (
        <Link to="/login" className="hover:text-gray-200 transition font-bold text-white">
          Login
        </Link>
      )}
    </div>
  );
}
