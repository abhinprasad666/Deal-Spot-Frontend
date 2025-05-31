// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";

const userImage = "https://randomuser.me/api/portraits/men/75.jpg"; // replace with actual user image url

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  return (
    <nav className=" bg-pink-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with description */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-white font-bold">
            <div className="text-2xl">Deal-Spot</div>
            <div className="text-xs md:text-sm font-normal opacity-80">
              Your best deals, every day
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 mx-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-white focus:outline-none transition duration-200"
            />
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6 text-white font-medium">
            <a href="#" className="hover:text-gray-200 transition flex items-center gap-1">
              Home
            </a>
            <a href="#" className="hover:text-gray-200 transition flex items-center gap-1">
              About
            </a>

            {/* Cart with icon */}
            <a href="#" className="hover:text-gray-200 transition flex items-center gap-1">
              <ShoppingCart size={18} /> Cart
            </a>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 hover:text-gray-200 transition"
              >
                <img
                  src={userImage}
                  alt="User Profile"
                  className="w-7 h-7 rounded-full object-cover"
                />
                Profile <ChevronDown size={16} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 text-gray-800 rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>

            {/* Auth */}
            <a href="#" className="hover:text-gray-200 transition">Login</a>
            <a href="#" className="hover:text-gray-200 transition">Signup</a>
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
        <div className="md:hidden px-4 pt-4 pb-6 bg-pink-600 border-pink-600 space-y-2 text-white">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full border border-white focus:ring-2 focus:ring-white focus:outline-none transition duration-200 bg-pink-00 text-white"
          />
          <a href="#" className="block hover:text-gray-200">Home</a>
          <a href="#" className="block hover:text-gray-200">About</a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <ShoppingCart size={18} /> Cart
          </a>

          {/* Profile dropdown */}
          <div>
            <button
              onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
              className="w-full flex justify-between items-center hover:text-gray-200 transition font-medium"
            >
              <div className="flex items-center gap-2">
                <img
                  src={userImage}
                  alt="User Profile"
                  className="w-6 h-6 rounded-full object-cover"
                />
                Profile
              </div>
              <ChevronDown size={16} className={`${mobileProfileOpen ? "rotate-180" : ""} transition-transform`} />
            </button>
            {mobileProfileOpen && (
              <div className="pl-6 mt-1 space-y-1">
                <a href="#" className="block hover:text-gray-200">Settings</a>
                <a href="#" className="block hover:text-gray-200">Logout</a>
              </div>
            )}
          </div>

          <a href="#" className="block hover:text-gray-200">Login</a>
          <a href="#" className="block hover:text-gray-200">Signup</a>
        </div>
      )}
    </nav>
  );
}
