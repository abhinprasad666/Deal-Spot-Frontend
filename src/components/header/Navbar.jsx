import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useSelector } from "react-redux";
import NavbarBrand from "./NavbarBrand";
import SearchBar from "../layouts/user/SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import userPlaceholder from "../../assets/icons/person.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const userImage = user?.profilePic || userPlaceholder;
  const cartCount = cartItems?.items?.length || null;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-pink-600 text-white dark:bg-gray-600 dark:text-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <NavbarBrand />

          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="w-full max-w-md">
              <SearchBar className="dark:bg-gray-600 dark:text-white text-white border-gray-200" />
            </div>
          </div>

          <NavLinks
            isLoggedIn={isAuthenticated}
            user={user}
            userImage={userImage}
            isDark={theme === "dark"}
            cartCount={cartCount}
          />

          <div className="hidden md:flex items-center ml-4">
            <button onClick={toggleTheme} className="hover:opacity-80">
              {theme === "dark" ? (
                <Sun size={22} className="text-yellow-400" />
              ) : (
                <Moon size={22} />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} />
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          isLoggedIn={isAuthenticated}
          userRole={user?.role}
          mobileProfileOpen={mobileProfileOpen}
          setMobileProfileOpen={setMobileProfileOpen}
          userImage={userImage}
          setMenuOpen={setMenuOpen}
          // isDark={theme === "dark"}
          cartCount={cartCount}
        />
      )}
    </nav>
  );
}
