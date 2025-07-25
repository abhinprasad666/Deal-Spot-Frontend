import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, LayoutDashboard, PlusCircle, ShoppingBag, User, LogOut,
  Moon, Sun, Home, Bell
} from "lucide-react";
import { useSelector } from "react-redux";

const SellerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const { seller } = useSelector((state) => state.sellerData);

  const navLinks = [
    { name: "Dashboard", path: "/seller/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Add Product", path: "/seller/add-product", icon: <PlusCircle size={20} /> },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme) setTheme(savedTheme);
    else if (prefersDark) setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav
      className={`transition-all duration-500 shadow-md sticky top-0 z-50 ${
        theme === "dark" ? "bg-gray-500 text-white" : "bg-pink-500 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/seller" className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-white">Deal</span>
              <span className="text-yellow-400">Spot</span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-pink-100 dark:text-gray-300">
              Seller Panel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:underline font-medium">
              <Home size={20} />
              <span>Home</span>
            </Link>

            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="flex items-center space-x-1 hover:underline font-medium">
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            <button className="relative hover:bg-white/10 p-1 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 hover:underline">
                <img
                  src={seller?.profilePic || "https://i.pravatar.cc/150?img=3"}
                  alt="Profile"
                  className="w-6 h-6 rounded-full"
                />
                <span>Profile</span>
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition duration-200 z-50">
                <Link to="/seller/profile" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2">
                  <User size={18} />
                  <span>My Profile</span>
                </Link>
                <button onClick={() => console.log("Logout")} className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="transition-all duration-300 p-1 rounded-full hover:bg-white/10">
              {theme === "dark" ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="transition-all duration-300">
              {theme === "dark" ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 py-3 space-y-2 transition-all duration-500 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-pink-400 text-white"
          }`}
        >
          <Link to="/" className="flex items-center space-x-2 py-2 px-2 hover:bg-pink-600 dark:hover:bg-pink-500 rounded-md" onClick={() => setIsOpen(false)}>
            <Home size={20} />
            <span>Home</span>
          </Link>

          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="flex items-center space-x-2 py-2 px-2 hover:bg-pink-600 dark:hover:bg-gray-500 rounded-md" onClick={() => setIsOpen(false)}>
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          <Link to="/seller/profile" className="flex items-center space-x-2 py-2 px-2 hover:bg-pink-600 dark:hover:bg-pink-500 rounded-md" onClick={() => setIsOpen(false)}>
            <User size={20} />
            <span>My Profile</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default SellerNavbar;
