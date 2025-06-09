import React from "react";

const Loader = () => {
  return (
    <div className="relative w-full h-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="loader border-4 border-t-4 border-gray-200 h-10 w-10 rounded-full animate-spin border-t-rose-600"></div>
      </div>
    </div>
  );
};

export default Loader;