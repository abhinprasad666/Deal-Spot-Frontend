import React from "react";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
      <div className="flex flex-col items-center space-y-3">
        {/* Spinner */}
        <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-rose-500 rounded-full animate-spin"></div>

        {/* Loading Text */}
        {message && (
          <p className="text-sm font-medium text-white">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Loader;
