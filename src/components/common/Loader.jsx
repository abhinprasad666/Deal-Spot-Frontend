import React from "react";

const Loader = ({ message,layoutLoder }) => {

    if(layoutLoder){
          return (
        <div className="fixed inset-0 z-50 text-red-500 flex justify-center items-center">
            <div className="flex flex-col items-center space-y-3">
                {/* Spinner */}
                <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-rose-500 rounded-full animate-spin"></div>

                {/* Optional message */}
                {message && (
                    <p className="text-sm font-medium text-red-500">{message}</p>
                )}
            </div>
        </div>
    );
    }else{ return (
        <div className="relative w-full h-32 flex justify-center items-center">
            <div className="flex flex-col items-center space-y-2">
                {/* Smaller Spinner */}
                <div className="loader border-2 border-t-2 border-gray-200 h-6 w-6 rounded-full animate-spin border-t-rose-600"></div>

                {/* Loading Text */}
                <p className="text-xs font-medium text-rose-500">{message ? message : null}</p>
            </div>
        </div>
    );}

   
};

export default Loader;
