import { useState } from "react";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import logo from '../../assets/icons/deal_spot_log.png'

const userImage = "https://randomuser.me/api/portraits/men/75.jpg";
const isLoggedIn = true; // Change to false to test guest view

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  return (
    <nav className="bg-pink-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-white font-bold">
            <div className="text-xl sm:text-2xl">Deal-Spot</div>
            <span className="text-xs sm:text-sm font-normal opacity-80">
              Your best deals, every day
            </span>
          </div>

          {/* Search */}
          <div className="hidden sm:block flex-1 mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-white focus:outline-none transition duration-200"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 text-white font-medium">
            <a
              href="#"
              className="bg-white text-pink-600 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-pink-100 transition duration-200"
            >
              Become a Seller
            </a>

            <a href="#" className="hover:text-gray-200 transition flex items-center gap-1">
              <ShoppingCart size={18} /> Cart
            </a>

            {/* Profile Dropdown or Auth Links */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 hover:text-gray-200 transition"
                >
                  <img
                    src={userImage}
                    alt="User"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  Profile <ChevronDown size={16} />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-44 bg-white border text-gray-800 rounded-md shadow-lg z-10 transform origin-top transition-all duration-200 ease-out ${
                    profileOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Orders</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Wishlist</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
                </div>
              </div>
            ) : (
              <>
                <a href="#" className="hover:text-gray-200 transition">Login</a>
                <a href="#" className="hover:text-gray-200 transition">Signup</a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-pink-600 border-t border-pink-700 space-y-2 text-white">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full border border-white focus:ring-2 focus:ring-white focus:outline-none transition duration-200 bg-pink-600 text-white"
          />

          <a
            href="#"
            className="block text-center bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition duration-200"
          >
            Become a Seller
          </a>

          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <ShoppingCart size={18} /> Cart
          </a>

          {/* Profile or Auth Links for Mobile */}
          {isLoggedIn ? (
            <div>
              <button
                onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                className="w-full flex justify-between items-center hover:text-gray-200 transition font-medium"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={userImage}
                    alt="User"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  Profile
                </div>
                <ChevronDown
                  size={16}
                  className={`${mobileProfileOpen ? "rotate-180" : ""} transition-transform`}
                />
              </button>

              <div
                className={`pl-6 mt-1 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
                  mobileProfileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <a href="#" className="block hover:text-gray-200">My Profile</a>
                <a href="#" className="block hover:text-gray-200">Orders</a>
                <a href="#" className="block hover:text-gray-200">Wishlist</a>
                <a href="#" className="block hover:text-gray-200">Settings</a>
                <a href="#" className="block hover:text-gray-200">Logout</a>
              </div>
            </div>
          ) : (
            <>
              <a href="#" className="block hover:text-gray-200">Login</a>
              <a href="#" className="block hover:text-gray-200">Signup</a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
