import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DashboardCard from "./DashboardCard";
import {
  FaRupeeSign,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaExclamationTriangle,
  FaStar,
} from "react-icons/fa";

import Loader from "../../common/Loader";
import { getSellerStatus } from "../../../redux/actions/seller/statusAction";
import { getSellerProducts } from "../../../redux/actions/seller/sellerProductsActions";

const SellerDashboard = () => {
  const { status, loading, error } = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSellerStatus);
    dispatch(getSellerProducts);
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
              onViewMore={() => navigate("/seller/products")}
            />
            <DashboardCard
              title="Total Orders"
              value={status?.totalOrders ?? 0}
              icon={FaShoppingCart}
              gradient="from-orange-500 to-amber-500"
              onViewMore={() => navigate("/seller/orders")}
            />
            <DashboardCard
              title="Out of Stock"
              value={status?.outOfStock ?? 0}
              icon={FaExclamationTriangle}
              gradient="from-rose-500 to-pink-500"
              onViewMore={() => navigate("/seller/products?filter=out-of-stock")}
            />
            <DashboardCard
              title="Total Users"
              value={status?.totalUsers ?? 0}
              icon={FaUsers}
              gradient="from-blue-500 to-indigo-500"
              onViewMore={() => navigate("/seller/users")}
            />
            <DashboardCard
              title="Total Reviews"
              value={status?.totalReviews ?? 0}
              icon={FaStar}
              gradient="from-yellow-400 to-yellow-600"
              onViewMore={() => navigate("/seller/reviews")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
