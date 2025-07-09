import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SliderCard from "./SliderCard";

const Slider = () => {
    const { slidesData, loading } = useSelector((state) => state.slides.slides);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!slidesData || slidesData.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slidesData.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [slidesData]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    };

    //Only show slider if not loading and slidesData is valid
    if (loading || !Array.isArray(slidesData) || slidesData.length === 0) {
        return null;
    }

    const currentSlide = slidesData[currentIndex];

    return (
        <div className="relative w-full max-w-7xl mx-auto mt-10 mb-10 rounded-xl overflow-hidden shadow-lg group">
            {/* Slide Content */}
            <SliderCard image={currentSlide.image} title={currentSlide.title} description={currentSlide.description} />

            {/* Prev Button */}
            <button
                onClick={goToPrev}
                className="hidden group-hover:block absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full z-20"
                aria-label="Previous Slide"
            >
                &#10094;
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="hidden group-hover:block absolute top-1/2 right-6 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full z-20"
                aria-label="Next Slide"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
