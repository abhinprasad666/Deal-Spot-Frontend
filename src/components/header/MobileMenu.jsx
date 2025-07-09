import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart } from "lucide-react";
import SearchBar from "../layouts/user/SearchBar";

export default function MobileMenu({
  isLoggedIn,
  userRole,
  mobileProfileOpen,
  setMobileProfileOpen,
  userImage,
  setMenuOpen,
  isDark,
  cartCount,
}) {
  return (
    <div
      className={`md:hidden px-4 pt-4 pb-6 border-t space-y-5 transition-all duration-500 ${
        isDark ? "bg-gray-800 text-white border-gray-700" : "bg-pink-600 text-white border-pink-700"
      }`}
    >
      <SearchBar className={`${isDark ? "bg-gray-700 text-white" : "bg-pink-600 text-white"}`} />

      {userRole === "seller" ? (
        <Link
          to="/seller/dashboard"
          className="block text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200"
        >
          Go to Seller Dashboard
        </Link>
      ) : (
        <Link
          to="/become-seller"
          className="block text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200"
        >
          Become a Seller
        </Link>
      )}

      <Link
        to="/cart"
        className="flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition font-medium"
        onClick={() => setMenuOpen(false)}
      >
        <ShoppingCart size={20} />
        <span>Cart</span>
        {cartCount && (
          <span className="ml-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>

      {isLoggedIn && (
        <div className="flex justify-center">
          <button
            onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
            className="w-full max-w-[320px] flex justify-center items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition font-medium"
          >
            <img
              src={userImage}
              alt="User"
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
            <Link to={"user-profile"}>My Profile</Link>
            <ChevronDown
              size={18}
              className={`${mobileProfileOpen ? "rotate-180" : ""} transition-transform`}
            />
          </button>
        </div>
      )}

      {!isLoggedIn && (
        <div className="flex flex-col items-center gap-2">
          <Link
            to="/login"
            className="w-full max-w-[320px] text-center bg-white/10 hover:bg-white/20 font-semibold px-4 py-3 rounded-xl transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full max-w-[320px] text-center bg-white/10 hover:bg-white/20 font-semibold px-4 py-3 rounded-xl transition"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}
