import { Link } from "react-router-dom";
import { Store } from "lucide-react";

export default function NavbarBrand() {
  return (
    <div className="flex flex-col sm:items-start gap-0 leading-tight">
      <Link to="/" className="flex items-center gap-1 text-xl sm:text-2xl hover:text-pink-200">
        <Store size={22} />
        <span className="font-bold">
          <span className="text-white">Deal</span>
          <span className="text-yellow-300 dark:text-yellow-400">Spot</span>
        </span>
      </Link>

      <span className="text-xs sm:text-sm font-normal opacity-80 text-white dark:text-gray-300">
        Your best deals, every day
      </span>
    </div>
  );
}
