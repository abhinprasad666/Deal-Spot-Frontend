import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";

export default function SearchBar({ className = "", placeholder = "Search..." }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [keyword, setKeyword] = useState("");
    const typingTimeoutRef = useRef(null);

    const searchHandler = (e) => {
        e.preventDefault();
        const trimmed = keyword.trim();
        if (trimmed) {
            navigate(`/product/search/${trimmed}`);
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        const trimmed = keyword.trim();
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            if (trimmed) {
                navigate(`/product/search/${trimmed}`);
            } else {
                navigate("/");
            }
        }, 500);
        return () => clearTimeout(typingTimeoutRef.current);
    }, [keyword, navigate]);

    useEffect(() => {
        if (location.pathname === "/") {
            setKeyword("");
        }
    }, [location]);

    return (
        <form onSubmit={searchHandler} className={`relative ${className}`}>
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 bg-white focus-within:ring-1 focus-within:ring-rose-500 transition">
                <Search className="text-gray-500 mr-1" size={18} />
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
                {keyword && (
                    <button
                        type="button"
                        onClick={() => setKeyword("")}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>
        </form>
    );
}
