import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DashboardCard = ({ title, value, icon: Icon, gradient, onViewMore }) => {
  const handleCardClick = () => {
    if (onViewMore) {
      onViewMore();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative flex flex-col gap-3 p-5 rounded-xl text-white shadow-md w-full sm:w-[400px] transition-all transform hover:scale-[1.03] hover:shadow-xl bg-gradient-to-r ${gradient} cursor-pointer`}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black">
        <Icon size={24} />
      </div>

      {/* Title & Value */}
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <h2 className="text-lg font-bold">{value}</h2>
      </div>

      {/* View More Button - purely visual now */}
      {onViewMore && (
        <div className="absolute bottom-3 right-4 flex items-center gap-1 text-sm text-white font-medium">
          View Details <FaArrowRight size={12} />
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
