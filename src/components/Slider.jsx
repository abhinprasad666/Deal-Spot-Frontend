// src/components/Slider.jsx
import React, { useEffect, useState } from "react";

const images = [
    "https://media.istockphoto.com/id/2150132151/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=2048x2048&w=is&k=20&c=S6iTVQTaBpmfnM-C6UbxBUUsmzkcY6HOyaAGnDKK9Rc=",
    "https://media.istockphoto.com/id/1414489347/photo/happy-little-girl-pointing-at-backpack-while-buying-school-supplies-with-her-parents-in.jpg?s=612x612&w=0&k=20&c=ccyEcquLeM7Vt-37qOH1Q-vPps8V_HygXEkYpO6hjhQ=",
    "https://media.istockphoto.com/id/1385768827/photo/young-woman-reading-nutrition-label-while-buying-diary-product-in-supermarket.jpg?s=612x612&w=0&k=20&c=H9afIdSg1_HWvvWPTNai9igkn95U4XO7hcQHzDQgvlM=",
    "https://media.istockphoto.com/id/489803256/photo/below-view-of-young-cheerful-family-in-shopping.jpg?s=612x612&w=0&k=20&c=KcmaBiURs_ChPFCdvNKhmTD5AVEiUxM4MmANitqioz4=",
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Manual control
    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-7xl h-[400px] mx-auto px-4 mt-10 mb-10 rounded-xl overflow-hidden shadow-lg group">
            {/* Slides */}
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}

            {/* Previous Button */}
            <button
                onClick={goToPrev}
                className="hidden group-hover:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
            >
                &#10094;
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="hidden group-hover:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
