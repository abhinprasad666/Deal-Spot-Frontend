import { useState } from "react";
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
  const [isDark, setIsDark] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const userImage = user?.profilePic || userPlaceholder;
  const cartCount = cartItems?.items?.length || null;

  return (
    <nav
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-pink-600 text-white"
      } shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <NavbarBrand isDark={isDark} />

          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="w-full max-w-md">
              <SearchBar
                className={`${
                  isDark ? "bg-gray-800 text-white" : "text-white border-gray-200"
                }`}
              />
            </div>
          </div>

          <NavLinks
            isLoggedIn={isAuthenticated}
            user={user}
            userImage={userImage}
            isDark={isDark}
            cartCount={cartCount}
          />

          <div className="hidden md:flex items-center ml-4">
            <button onClick={() => setIsDark(!isDark)} className="hover:opacity-80">
              {isDark ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
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
          isDark={isDark}
          cartCount={cartCount}
        />
      )}
    </nav>
  );
}
