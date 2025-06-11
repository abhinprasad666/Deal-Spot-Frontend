import { Link } from "react-router-dom";

export default function ProfileDropdown({ profileOpen, setProfileOpen, userImage }) {
    return (
        <div className="relative">
            <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 hover:text-gray-200 transition"
            >
                <img src={userImage} alt="User" className="w-7 h-7 rounded-full object-cover" />
                Profile
            </button>

            <div
                className={`absolute right-0 mt-2 w-44 bg-white border text-gray-800 rounded-md shadow-lg z-10 transform origin-top transition-all duration-200 ease-out ${
                    profileOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
            >
                {["profile", "orders", "wishlist", "settings", "logout"].map((route, i) => (
                    <Link key={i} to={`/${route}`} className="block px-4 py-2 hover:bg-gray-100 capitalize">
                        {route === "logout" ? "Logout" : `${route}`}
                    </Link>
                ))}
            </div>
        </div>
    );
}
