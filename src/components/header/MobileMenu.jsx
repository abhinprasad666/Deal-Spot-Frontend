import { Link } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";
import SearchBar from "../layouts/SearchBar";

export default function MobileMenu({ isLoggedIn, mobileProfileOpen, setMobileProfileOpen, userImage }) {
    return (
        <div className="md:hidden px-4 pt-4 pb-6 bg-pink-600 border-t border-pink-700 space-y-2 text-white">
            <SearchBar className="border-white bg-pink-600 text-white" />
            <Link to="/become-seller" className="block text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200">
                Become a Seller
            </Link>
            <Link to="/cart" className="flex items-center gap-2 hover:text-gray-200">
                <ShoppingCart size={18} /> Cart
            </Link>

            {isLoggedIn ? (
                <div>
                    <button
                        onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                        className="w-full flex justify-between items-center hover:text-gray-200 transition font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <img src={userImage} alt="User" className="w-6 h-6 rounded-full object-cover" />
                            Profile
                        </div>
                        <ChevronDown size={16} className={`${mobileProfileOpen ? "rotate-180" : ""} transition-transform`} />
                    </button>
                    <div className={`pl-6 mt-1 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${mobileProfileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                        {["profile", "orders", "wishlist", "settings", "logout"].map((item, i) => (
                            <Link key={i} to={`/${item}`} className="block hover:text-gray-200 capitalize">
                                {item === "logout" ? "Logout" : `My ${item}`}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <Link to="/login" className="block hover:text-gray-200 font-bold">Login</Link>
                    <Link to="/signup" className="block hover:text-gray-200 font-bold">Signup</Link>
                </>
            )}
        </div>
    );
}
