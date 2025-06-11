import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar({ className = "", placeholder = "Search products..." }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [keyword, setKeyword] = useState("");
    const typingTimeoutRef = useRef(null);

    // Submit handler (manual form submission)
    const searchHandler = (e) => {
        e.preventDefault();
        const trimmed = keyword.trim();
        if (trimmed) {
            navigate(`/product/search/${trimmed}`);
        } else {
            navigate("/");
        }
    };

    // Auto navigation after typing delay (debounce)
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

    // Clear search bar when navigating to home
    useEffect(() => {
        if (location.pathname === "/") {
            setKeyword("");
        }
    }, [location]);

    return (
        <form onSubmit={searchHandler}>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={placeholder}
                className={`w-full px-4 py-2 rounded-full border focus:ring-2 focus:outline-none transition duration-200 ${className}`}
            />
        </form>
    );
}
