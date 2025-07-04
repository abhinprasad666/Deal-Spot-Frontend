import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingBag,
  User,
  LogOut,
} from "lucide-react";

const SellerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/seller/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Products", path: "/seller/products", icon: <Package size={20} /> },
    { name: "Add Product", path: "/seller/add-product", icon: <PlusCircle size={20} /> },
    { name: "Orders", path: "/seller/orders", icon: <ShoppingBag size={20} /> },
  ];

  const handleLogout = () => {
    // TODO: Logout Logic
    console.log("Logout");
  };

  return (
    <nav className="bg-pink-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/seller/dashboard" className="flex items-center space-x-2">
            <img
              src="/sample-seller-logo.png"
              alt="Seller Logo"
              className="w-8 h-8 rounded-full bg-white p-1"
            />
            <span className="text-xl font-semibold">Seller Panel</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-1 hover:text-gray-200 font-medium"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-200">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-md shadow-md opacity-0 group-hover:opacity-100 transition duration-200 z-50">
                <Link
                  to="/seller/profile"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2"
                >
                  <User size={18} />
                  <span>My Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 hover:bg-gray-100 space-x-2 text-left"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-400 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center space-x-2 py-2 border-b border-pink-300 text-white hover:bg-pink-600 rounded-md px-2"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          <Link
            to="/seller/profile"
            className="flex items-center space-x-2 py-2 border-b border-pink-300 text-white hover:bg-pink-600 rounded-md px-2"
            onClick={() => setIsOpen(false)}
          >
            <User size={20} />
            <span>My Profile</span>
          </Link>

          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="flex items-center w-full space-x-2 py-2 text-white hover:bg-pink-600 rounded-md px-2"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default SellerNavbar;
