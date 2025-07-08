import React, { useState, useEffect, useRef } from "react";
import { LogOut, Settings, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("/Logged out");
    navigate("/login");
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Link to={"seller/profile"}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-700 hover:text-pink-600 text-sm font-medium"
      >
        <User size={18} />
        Profile
        <span className="ml-1">▼</span>
      </Link>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md py-2 z-50">
          <Link
            to="/seller/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings size={16} />
            Account Settings
          </Link>
          {/* <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut size={16} />
            Logout
          </button> */}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
