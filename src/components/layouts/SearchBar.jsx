import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ className = "", placeholder = "Search products..." }) {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const typingTimeoutRef = useRef(null); // 🟢 this persists across renders

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
