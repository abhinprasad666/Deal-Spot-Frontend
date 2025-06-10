import React from "react";

const SliderCard = ({ image, title, description }) => {
    return (
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
            {/* Background Image */}
            <img src={image} alt={title || "Slide"} className="w-full h-full object-cover" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center  bg-opacity-30">
                <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-3">{title}</h2>
                <p className="text-white text-xl md:text-2xl drop-shadow-md max-w-3xl">{description}</p>
            </div>
        </div>
    );
};

export default SliderCard;
