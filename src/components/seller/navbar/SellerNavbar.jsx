import React, { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import SellerLogo from "./SellerLogo";
import ProfileDropdown from "./ProfileDropdown";

const SellerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    { name: "Dashboard", path: "/seller/dashboard" },
    { name: "Products", path: "/seller/products" },
    { name: "Orders", path: "/seller/orders" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <SellerLogo />

        {/* Right: Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 hover:text-pink-600 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Search */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400"
            />
          </form>

          {/* Notification */}
          <button className="text-gray-600 hover:text-blue-600">
            <Bell size={20} />
          </button>

          {/* Profile Dropdown */}
          <ProfileDropdown />
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown (optional for later) */}
    </nav>
  );
};

export default SellerNavbar;
