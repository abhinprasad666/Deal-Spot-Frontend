import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function NavLinks({ isLoggedIn, profileOpen, setProfileOpen, userImage }) {
    return (
        <div className="hidden md:flex items-center gap-4 text-white font-medium">
            <Link to="/" className="hover:text-gray-200 transition font-bold">
                Home
            </Link>
            <Link to="/become-seller" className="bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-pink-100 transition duration-200">
                Become a Seller
            </Link>
            <Link to="/cart" className="hover:text-gray-200 transition flex items-center gap-1">
                <ShoppingCart size={18} /> Cart
            </Link>

            {isLoggedIn ? (
                <ProfileDropdown profileOpen={profileOpen} setProfileOpen={setProfileOpen} userImage={userImage} />
            ) : (
                <Link to="/login" className="hover:text-gray-200 transition font-bold">Login</Link>
            )}
        </div>
    );
}
