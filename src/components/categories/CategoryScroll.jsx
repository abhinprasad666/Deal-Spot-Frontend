import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

const CategoryScroll = () => {
    const { categories, loading } = useSelector((state) => state.categories);

    const scrollRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            const el = scrollRef.current;
            if (!el) return;
            setIsOverflowing(el.scrollWidth > el.clientWidth);
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

    return (
        <>
        
    {loading?<Loader/>:<div>
        <style>
            {`
        .no-scrollbar::-webkit-scrollbar {
        display: none;
        }
        .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
        }
    `}
        </style>

        <section className="mt-20 px-4">
            <div
                ref={scrollRef}
                className={`flex space-x-6 py-2 transition-all duration-300 ${
                    isOverflowing ? "overflow-x-auto no-scrollbar justify-start" : "justify-center"
                }`}
            >
                {categories.map((cat, idx) => (
                    <Link to={cat.to} key={idx} className="flex flex-col items-center min-w-[80px] text-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-red-500 overflow-hidden flex items-center justify-center">
                            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="mt-2 md:mt-3 text-sm md:text-base font-semibold text-gray-700">
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
        </div>}
        </>
    );
};

export default CategoryScroll;
