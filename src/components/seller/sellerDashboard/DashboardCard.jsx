// components/DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, colorFrom, colorTo }) => {
  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-xl text-white shadow-md w-full sm:w-[400px] bg-gradient-to-r from-${colorFrom} to-${colorTo}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm">{title}</p>
        <h2 className="text-lg font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
