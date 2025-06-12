import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import NavbarBrand from "./NavbarBrand";
import SearchBar from "../layouts/SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const userImage = user?.profileImage || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

  return (
    <nav className="bg-pink-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <NavbarBrand />

          {/* Search */}
          <div className="hidden sm:block flex-1 mx-4">
            <SearchBar className="text-white border-gray-200" />
          </div>

          {/* Desktop Nav Links / Profile */}
          <NavLinks
            isLoggedIn={isAuthenticated}
            profileOpen={profileOpen}
            setProfileOpen={setProfileOpen}
            userImage={userImage}
          />

          {/* Hamburger Menu for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <MobileMenu
          isLoggedIn={isAuthenticated}
          mobileProfileOpen={mobileProfileOpen}
          setMobileProfileOpen={setMobileProfileOpen}
          userImage={userImage}
        />
      )}
    </nav>
  );
}
