import React from "react";

const Loader = ({ message, layoutLoder }) => {
  if (layoutLoder) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-rose-500 rounded-full animate-spin"></div>
          {message && (
            <p className="text-sm font-medium text-red-500">{message}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="h-6 w-6 border-2 border-t-2 border-gray-200 border-t-rose-600 rounded-full animate-spin"></div>
        {message && (
          <p className="text-xs font-medium text-rose-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Loader;
