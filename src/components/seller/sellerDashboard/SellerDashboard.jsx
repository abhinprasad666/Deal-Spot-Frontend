// pages/seller/Dashboard.jsx
import React from 'react';
import { FaRupeeSign, FaBoxOpen, FaUsers, FaShoppingCart, FaExclamationTriangle } from 'react-icons/fa';
import DashboardCard from './DashboardCard';

const SellerDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="flex flex-wrap gap-6 justify-start">
        <DashboardCard
          title="Total Amount"
          value="₹42,500"
          icon={FaRupeeSign}
          colorFrom="pink-500"
          colorTo="rose-500"
        />
        <DashboardCard
          title="Total Products"
          value="150"
          icon={FaBoxOpen}
          colorFrom="green-500"
          colorTo="teal-500"
        />
        <DashboardCard
          title="Total Users"
          value="1,240"
          icon={FaUsers}
          colorFrom="blue-500"
          colorTo="indigo-500"
        />
        <DashboardCard
          title="Total Orders"
          value="875"
          icon={FaShoppingCart}
          colorFrom="orange-500"
          colorTo="amber-500"
        />
        <DashboardCard
          title="Out of Stock"
          value="6"
          icon={FaExclamationTriangle}
          colorFrom="rose-500"
          colorTo="pink-500"
        />
      </div>
    </div>
  );
};

export default SellerDashboard;
