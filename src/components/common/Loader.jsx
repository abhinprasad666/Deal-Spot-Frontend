import React from "react";

const Loader = ({message}) => {
  return (
    <div className="relative w-full h-40 flex justify-center items-center">
      <div className="flex flex-col items-center space-y-3">
        {/* Spinner */}
        <div className="loader border-4 border-t-4 border-gray-200 h-10 w-10 rounded-full animate-spin border-t-rose-600"></div>

        {/* Loading Text */}
        <p className="text-sm font-medium text-rose-500">{message?message:null}</p>
      </div>
    </div>
  );
};

export default Loader;
