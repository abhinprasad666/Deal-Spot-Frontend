import React, { useEffect, useState } from "react";

const slides = [
    {
        img: "https://media.istockphoto.com/id/2150132151/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=2048x2048&w=is&k=20&c=S6iTVQTaBpmfnM-C6UbxBUUsmzkcY6HOyaAGnDKK9Rc=",
        title: "Your Shopping Adventure Starts Here",
        description: "Discover the best deals and products tailored just for you.",
    },
    {
        img: "https://media.istockphoto.com/id/1414489347/photo/happy-little-girl-pointing-at-backpack-while-buying-school-supplies-with-her-parents-in.jpg?s=612x612&w=0&k=20&c=ccyEcquLeM7Vt-37qOH1Q-vPps8V_HygXEkYpO6hjhQ=",
        title: "Find Quality Products",
        description: "Choose from a wide range of quality items at unbeatable prices.",
    },
    {
        img: "https://media.istockphoto.com/id/1385768827/photo/young-woman-reading-nutrition-label-while-buying-diary-product-in-supermarket.jpg?s=612x612&w=0&k=20&c=H9afIdSg1_HWvvWPTNai9igkn95U4XO7hcQHzDQgvlM=",
        title: "Shop with Confidence",
        description: "We ensure safe and secure payment methods for a worry-free experience.",
    },
    {
        img: "https://media.istockphoto.com/id/489803256/photo/below-view-of-young-cheerful-family-in-shopping.jpg?s=612x612&w=0&k=20&c=KcmaBiURs_ChPFCdvNKhmTD5AVEiUxM4MmANitqioz4=",
        title: "Enjoy Fast Delivery",
        description: "Get your orders delivered quickly right to your doorstep.",
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const { img, title, description } = slides[currentIndex];

    return (
        <div className="relative w-full max-w-7xl mx-auto mt-10 mb-10 rounded-xl overflow-hidden shadow-lg group">
            {/* Image */}
            <img
                src={img}
                alt={title}
                className="w-full h-[450px] object-cover rounded-xl"
            />

            {/* Text overlay in center */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-3">
                    {title}
                </h2>
                <p className="text-white text-xl md:text-2xl drop-shadow-md max-w-3xl">
                    {description}
                </p>
            </div>

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
