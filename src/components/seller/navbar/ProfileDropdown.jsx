import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu, X, LayoutDashboard, Users, ShoppingCart, Settings, LogOut,
  Moon, Sun, Bell
} from "lucide-react";
import ProfileDropdown from "./ProfileDropdown"; // Reusing your existing dropdown

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  const navLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCart size={20} /> },
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav
      className={`transition-all duration-500 shadow-md sticky top-0 z-50 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-pink-500 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/admin/dashboard" className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-white">Deal</span>
              <span className="text-yellow-400">Spot</span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-pink-100 dark:text-gray-300">
              Admin Panel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-1 hover:underline font-medium"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            <button className="relative hover:bg-white/10 p-1 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <ProfileDropdown />

            <button onClick={toggleTheme} className="transition-all duration-300 p-1 rounded-full hover:bg-white/10">
              {theme === "dark" ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme}>
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center space-x-2 py-2 px-2 hover:bg-pink-600 dark:hover:bg-gray-500 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          <Link
            to="/admin/profile"
            className="flex items-center space-x-2 py-2 px-2 hover:bg-pink-600 dark:hover:bg-pink-500 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
