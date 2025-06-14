import { Link } from "react-router-dom";
import { ShoppingCart, Home } from "lucide-react"; // ⬅️ Added Home icon import
import ProfileDropdown from "./ProfileDropdown";

export default function NavLinks({ isLoggedIn, user, userImage }) {
    console.log("user role navbar", user);
    return (
        <div className="hidden md:flex items-center gap-4 text-white font-medium">
            {/* Home Icon */}
            <Link to="/" className="hover:text-gray-200 transition font-bold">
                <Home size={20} />
            </Link>

            {user?.role === "seller" ? (
                <Link
                    to="/seller-dashboard"
                    className="text-[8px] lg:text-[15px] bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-pink-100 transition duration-200"
                >
                    Go to Seller Dashboard
                </Link>
            ) : (
                <Link
                    to="/become-seller"
                    className="bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-pink-100 transition duration-200"
                >
                    Become a Seller
                </Link>
            )}

            {/* Cart Icon */}
            <Link to="/cart" className="hover:text-gray-200 transition flex items-center gap-1">
                <ShoppingCart size={18} />
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
