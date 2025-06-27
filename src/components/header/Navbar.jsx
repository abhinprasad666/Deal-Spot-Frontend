import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import NavbarBrand from "./NavbarBrand";
import SearchBar from "../layouts/SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import userPlaceholder from "../../assets/icons/person.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const userImage = user?.profilePic || userPlaceholder;

    return (
        <nav className="bg-pink-600 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-4">
                    {/* Brand */}
                    <NavbarBrand />

                    {/* Search Bar (Only visible on md and up) */}
                    <div className="hidden md:flex flex-1 justify-center px-4">
                        <div className="w-full max-w-md">
                            <SearchBar className="text-white border-gray-200" />
                        </div>
                    </div>

                    {/* Nav Links or Profile */}
                    <NavLinks isLoggedIn={isAuthenticated} userImage={userImage} user={user} />

                    {/* Hamburger for mobile */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none text-white">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <MobileMenu
                    isLoggedIn={isAuthenticated}
                    mobileProfileOpen={mobileProfileOpen}
                    setMobileProfileOpen={setMobileProfileOpen}
                    userImage={userImage}
                    setMenuOpen={setMenuOpen}
                />
            )}
        </nav>
    );
}
