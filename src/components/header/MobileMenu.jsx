import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SearchBar from "../layouts/user/SearchBar";

export default function MobileMenu({
    isLoggedIn,
    userRole,
    mobileProfileOpen,
    setMobileProfileOpen,
    userImage,
    setMenuOpen,
}) {
    return (
        <div className="md:hidden px-4 pt-4 pb-6 bg-pink-600 border-t border-pink-700 space-y-5 text-white">
            {/* Search */}
            <SearchBar className="border-white bg-pink-600 text-white" />

            {/* Become a Seller or Go to Seller Dashboard */}
            {userRole === "seller" ? (
                <Link
                    to="/seller-dashboard"
                    className="block text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200"
                >
                    Go to Seller Dashboard
                </Link>
            ) : (
                <Link
                    to="/become-seller"
                    className="block text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200 "
                >
                    Become a Seller
                </Link>
            )}

            {/* Profile (only if logged in) */}
            {isLoggedIn && (
                <div className="flex justify-center" onClick={() => setMenuOpen(false)}>
                    <Link
                        to={"/user-profile"}
                        onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                        className="border-1 border-white w-full max-w-[320px] flex justify-center items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition font-medium"
                    >
                        <img
                            src={userImage}
                            alt="User"
                            className="w-8 h-8 rounded-full object-cover border-2 border-white"
                        />
                        <span>My Profile</span>
                        <ChevronDown
                            size={18}
                            className={`${mobileProfileOpen ? "rotate-180" : ""} transition-transform`}
                        />
                    </Link>
                </div>
            )}

            {/*Login / Signup (only if not logged in) */}
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
