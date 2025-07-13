import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerOrders } from "../../../redux/actions/seller/orderListActions";
import CancelOrderModal from "./CancelOrderModal";
import ButtonLoader from "../../../components/common/loaders/ButtonLoader";

const SellerOrdersList = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.sellerOrdersList);

    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getSellerOrders);
    }, [dispatch]);

    const openCancelModal = (orderId) => {
        setSelectedOrderId(orderId);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedOrderId(null);
        setShowModal(false);
    };

    const handleCancelSubmit = (orderId, reason) => {
        console.log("Cancel Order:", orderId);
        console.log("Reason:", reason);
        alert(`Order ID ${orderId} cancelled with reason: "${reason}"`);
        closeModal();

        // TODO: Dispatch cancel order action
    };

    return (
        <div className="p-4 sm:p-6 relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 dark:text-white">🧾 Seller Orders</h2>
            {loading ? (
                <ButtonLoader
                    bottomMessage={"Hang tight! We’re preparing all order details."}
                    fullPage={true}
                    message="Fetching your latest orders"
                />
            ) : (
                <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Total Orders: {orders.length}</p>

                    <div className="grid gap-6">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow p-4 sm:p-6 transition hover:shadow-md"
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                                    {/* Order Info */}
                                    <div className="w-full sm:w-1/3">
                                        <p className="text-lg font-semibold text-gray-800 dark:text-white">
                                            Order ID: <span className="text-blue-600">{order._id}</span>
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">
                                            Customer: <span className="font-medium">{order.userId.name}</span>
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">
                                            Ordered At: {new Date(order.orderedAt).toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                            Address:{" "}
                                            {`${order.shippingAddress.addressLine1}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}`}
                                        </p>
                                    </div>

                                    {/* Product Items */}
                                    <div className="w-full sm:w-1/3 flex flex-col items-center justify-center gap-4">
                                        {order.cartItems.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center bg-gray-100 dark:bg-[#2a2a2a] p-3 rounded-lg w-full max-w-[200px]"
                                            >
                                                <img
                                                    src={item.productId.image}
                                                    alt={item.productId.title}
                                                    className="w-20 h-20 rounded-md object-cover mb-2"
                                                />
                                                <h3 className="font-semibold text-center text-gray-800 dark:text-white text-sm">
                                                    {item.productId.title}
                                                </h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-300">
                                                    Qty: {item.quantity}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Summary */}
                                    <div className="w-full sm:w-1/3 text-right flex flex-col items-end justify-center">
                                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-1">
                                            Summary
                                        </p>
                                        <p className="text-lg font-bold text-green-600 mb-1">₹{order.totalPrice}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            <span className="font-medium">Payment Status:</span>{" "}
                                            <span
                                                className={`font-semibold ${
                                                    order.paidAt ? "text-green-600" : "text-red-500"
                                                }`}
                                            >
                                                {order.paidAt ? "Paid" : "Pending"}
                                            </span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            <span className="font-medium">Order Status:</span>{" "}
                                            <span
                                                className={`font-semibold ${
                                                    order.status === "Delivered"
                                                        ? "text-green-600"
                                                        : order.status === "Cancelled"
                                                        ? "text-red-500"
                                                        : "text-yellow-500"
                                                }`}
                                            >
                                                {order.status}
                                            </span>
                                        </p>
                                        {order.status === "Delivered" && order.paidAt && (
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                Delivered At: {new Date(order.paidAt).toLocaleString()}
                                            </p>
                                        )}

                                        {/* Cancel Button */}
                                        {order.status !== "Delivered" && order.status !== "Cancelled" && (
                                            <button
                                                onClick={() => openCancelModal(order._id)}
                                                className="mt-3 px-4 py-1 text-sm rounded-md text-white bg-red-600 hover:bg-red-700 transition"
                                            >
                                                Cancel Order Request
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <CancelOrderModal orderId={selectedOrderId} onClose={closeModal} onSubmit={handleCancelSubmit} />
                    )}
                </div>
            )}
        </div>
    );
};

export default SellerOrdersList;
