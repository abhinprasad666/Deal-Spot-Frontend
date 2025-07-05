// pages/seller/SellerDashboard.jsx

import DashboardCard from "./DashboardCard";
import {
  FaRupeeSign,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSellerStatus } from "../../../redux/actions/seller/statusAction";
import { useEffect } from "react";
import Loader from "../../common/Loader";

const SellerDashboard = () => {
  const { status, loading, error } = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSellerStatus);
  }, [dispatch]);

  return (
    <div className="p-4 sm:p-6">
      <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">
          📊 Seller Dashboard
        </h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-start">
            <DashboardCard
              title="Total Sales"
              value={`₹${status?.totalSales ?? 0}`}
              icon={FaRupeeSign}
              gradient="from-pink-500 to-rose-500"
            />
            <DashboardCard
              title="Total Products"
              value={status?.totalProducts ?? 0}
              icon={FaBoxOpen}
              gradient="from-green-500 to-teal-500"
            />
            <DashboardCard
              title="Total Orders"
              value={status?.totalOrders ?? 0}
              icon={FaShoppingCart}
              gradient="from-orange-500 to-amber-500"
            />
            <DashboardCard
              title="Out of Stock"
              value={status?.outOfStock ?? 0}
              icon={FaExclamationTriangle}
              gradient="from-rose-500 to-pink-500"
            />
            <DashboardCard
              title="Total Users"
              value={status?.totalUsers ?? 0}
              icon={FaUsers}
              gradient="from-blue-500 to-indigo-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
