import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Settings, ChevronDown, LogOut, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions/logoutAction";
import { clearCartState } from "../../redux/slices/productSlices/cartSlice";


export default function ProfileDropdown({ userImage }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

     const handleLogout = () => {
         dispatch(logout());
         dispatch(clearCartState());
         navigate("/login")
     };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <img
          src={userImage}
          alt="User"
          className="w-8 h-8 rounded-full object-cover border-2 border-white"
        />
        <ChevronDown size={18} className={`${open ? "rotate-180" : ""} transition-transform`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 py-2">
          <Link
            to="/user-profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <User size={18} /> My Profile
          </Link>
          <Link
            to="/account-settings"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <Settings size={18} /> Account Settings
          </Link>
          <Link
            to="/myOrders"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <ShoppingBag size={18} /> My Orders
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
