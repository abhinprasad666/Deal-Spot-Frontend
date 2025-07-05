import { Link } from "react-router-dom";
import { Store } from "lucide-react";

export default function NavbarBrand({ isDark }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 text-white font-bold leading-tight">
      <Link to="/" className="flex items-center gap-1 text-xl sm:text-2xl hover:text-pink-200">
        <Store size={22} />
        <span className="font-bold">
          <span className={isDark ? "text-white" : "text-white"}>Deal</span>
          <span className={isDark ? "text-yellow-400" : "text-yellow-300"}>Spot</span>
        </span>
      </Link>
      <span className="text-xs sm:text-sm font-normal opacity-80 -mt-1 sm:mt-0 sm:ml-1">
        Your best deals, every day
      </span>
    </div>
  );
}
