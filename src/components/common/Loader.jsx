import React from "react";

const Loader = ({ message }) => {
    return (
        <div className="relative w-full h-32 flex justify-center items-center">
            <div className="flex flex-col items-center space-y-2">
                {/* Smaller Spinner */}
                <div className="loader border-2 border-t-2 border-gray-200 h-6 w-6 rounded-full animate-spin border-t-rose-600"></div>

                {/* Loading Text */}
                <p className="text-xs font-medium text-rose-500">{message ? message : null}</p>
            </div>
        </div>
    );
};

export default Loader;
