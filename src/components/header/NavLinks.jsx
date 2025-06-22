import { Link } from "react-router-dom";
import { ShoppingCart, Home } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { useSelector } from "react-redux";

export default function NavLinks({ isLoggedIn, user, userImage }) {

    const {cartItems}=useSelector(state=>state.cart)
    const CartCount =cartItems?.items?.length ||null

    return (
        <div className="hidden md:flex items-center gap-4 text-white font-medium">
            {/* Home Icon */}
            <Link to="/" className="hover:text-gray-200 transition font-bold">
                <Home size={20} />
            </Link>

            {/* Seller or Become Seller Link */}
            {user?.role === "seller" ? (
                <Link
                    to="/seller-dashboard"
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

            {/* Cart Icon with Badge */}
            <Link to="/cart" className="relative hover:text-gray-200 transition flex items-center">
                <ShoppingCart size={20} />
                {/* Cart count badge */}
             {CartCount&&   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {CartCount}
                </span>}
            </Link>

            {/* Profile or Login */}
            {isLoggedIn ? (
                <ProfileDropdown userImage={userImage} />
            ) : (
                <Link to="/login" className="hover:text-gray-200 transition font-bold">
                    Login
                </Link>
            )}
        </div>
    );
}
