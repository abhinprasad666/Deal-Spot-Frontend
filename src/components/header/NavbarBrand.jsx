
import { Link } from "react-router-dom";

export default function NavbarBrand() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-white font-bold">
            <Link to="/" className="text-xl sm:text-2xl cursor-pointer hover:text-pink-200">
                Deal-Spot
            </Link>
            <span className="text-xs sm:text-sm font-normal opacity-80">Your best deals, every day</span>
        </div>
    );
}
