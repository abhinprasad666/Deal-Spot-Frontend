import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarBrand from "./NavbarBrand";
import SearchBar from "../layouts/SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const userImage = "https://randomuser.me/api/portraits/men/75.jpg";
const isLoggedIn = true;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

    return (
        <nav className="bg-pink-600 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <NavbarBrand />
                    <div className="hidden sm:block flex-1 mx-4">
                        <SearchBar className="text-white border-gray-200" />
                    </div>
                    <NavLinks
                        isLoggedIn={isLoggedIn}
                        profileOpen={profileOpen}
                        setProfileOpen={setProfileOpen}
                        userImage={userImage}
                    />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none text-white">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <MobileMenu
                    isLoggedIn={isLoggedIn}
                    mobileProfileOpen={mobileProfileOpen}
                    setMobileProfileOpen={setMobileProfileOpen}
                    userImage={userImage}
                />
            )}
        </nav>
    );
}
