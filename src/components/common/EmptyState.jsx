import { Sad } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyState = ({
  title = "Nothing here yet!",
  subtitle = "Looks like you haven't added anything.",
  showButton = true,
  buttonText = "Continue Shopping",
  buttonLink = "/",
  showHome = true,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Sad className="text-pink-500 mb-4" size={60} />
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 mt-2">{subtitle}</p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        {showButton && (
          <Link
            to={buttonLink}
            className="bg-pink-600 text-white px-6 py-2 rounded-full shadow hover:bg-pink-700 transition"
          >
            {buttonText}
          </Link>
        )}
        {showHome && (
          <Link
            to="/"
            className="text-pink-600 border border-pink-600 px-6 py-2 rounded-full hover:bg-pink-50 transition"
          >
            Go to Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
