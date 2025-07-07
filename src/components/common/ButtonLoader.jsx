import React from "react";
import { PulseLoader } from "react-spinners";

const ButtonLoader = ({
  size = 8,
  color = "#ffffff",
  message = "",
  messageWidth = "", // optional tailwind width class like "w-32"
  messageClass = "", // for additional custom styling
}) => {
  return (
    <div className="flex items-center gap-2">
      {message && (
        <span
          className={`text-sm font-medium text-white truncate ${messageWidth} ${messageClass}`}
        >
          {message}
        </span>
      )}
      <PulseLoader size={size} color={color} />
    </div>
  );
};

export default ButtonLoader;
