// components/seller/DashboardCard.jsx

import React from "react";

const DashboardCard = ({ title, value, icon: Icon, gradient }) => {
  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-xl text-white shadow-md w-full sm:w-[400px] transition-all transform hover:scale-[1.03] hover:shadow-xl cursor-pointer bg-gradient-to-r ${gradient}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <h2 className="text-lg font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
