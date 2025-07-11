import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ShoppingCart,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import SearchBar from "../layouts/user/SearchBar";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions/logoutAction";
import { clearCartState } from "../../redux/slices/productSlices/cartSlice";

export default function MobileMenu({
  isLoggedIn,
  userRole,
  mobileProfileOpen,
  setMobileProfileOpen,
  userImage,
  setMenuOpen,
  cartCount,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCartState());
    setMenuOpen(false);
    navigate("/login");
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="md:hidden px-4 pt-4 pb-6 border-t space-y-5 transition-all duration-500 bg-pink-600 text-white border-pink-700 dark:bg-gray-800 dark:text-white dark:border-gray-700">
      <SearchBar className="bg-pink-600 text-white dark:bg-gray-700 dark:text-white" />

      {userRole === "seller" ? (
        <button
          onClick={() => handleNavigate("/seller/dashboard")}
          className="block w-full text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200"
        >
          Go to Seller Dashboard
        </button>
      ) : (
        <button
          onClick={() => handleNavigate("/become-seller")}
          className="block w-full text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200"
        >
          Become a Seller
        </button>
      )}

      <button
        onClick={() => handleNavigate("/cart")}
        className="flex justify-center items-center gap-2 w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition font-medium dark:bg-white/10 dark:hover:bg-white/20"
      >
        <ShoppingCart size={20} />
        <span>Cart</span>
        {cartCount > 0 && (
          <span className="ml-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      {isLoggedIn && (
        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={() => handleNavigate("/user-profile")}
            className="w-full max-w-[320px] flex justify-center items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition font-medium dark:bg-white/10 dark:hover:bg-white/20"
          >
            <img
              src={userImage}
              alt="User"
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
            <span>My Profile</span>
            <ChevronDown
              size={18}
              className={`${
                mobileProfileOpen ? "rotate-180" : ""
              } transition-transform`}
            />
          </button>

          <button
            onClick={() => handleNavigate("/myOrders")}
            className="w-full max-w-[320px] flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition font-medium dark:bg-white/10 dark:hover:bg-white/20"
          >
            <ShoppingBag size={18} />
            <span>My Orders</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full max-w-[320px] flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-4 py-3 rounded-xl transition font-medium dark:bg-white dark:hover:bg-gray-200"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      )}

      {!isLoggedIn && (
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => handleNavigate("/login")}
            className="w-full max-w-[320px] text-center bg-white/10 hover:bg-white/20 font-semibold px-4 py-3 rounded-xl transition dark:bg-white/10 dark:hover:bg-white/20"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigate("/signup")}
            className="w-full max-w-[320px] text-center bg-white/10 hover:bg-white/20 font-semibold px-4 py-3 rounded-xl transition dark:bg-white/10 dark:hover:bg-white/20"
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
}
