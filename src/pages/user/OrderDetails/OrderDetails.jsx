import React, { useEffect, useState } from "react";
import { ShoppingBag, MessageSquareText, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductReview from "./ProductReview";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../utils/toastUtils";
import { getMyOrders } from "../../../redux/actions/ordersActions";
import { getReviewsAction } from "../../../redux/actions/reviewsActions/getReviewAction";

const statusColorMap = {
  Pending: "bg-yellow-100 text-yellow-800",
  Confirmed: "bg-blue-100 text-blue-800",
  Shipped: "bg-indigo-100 text-indigo-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
  Refunded: "bg-gray-200 text-gray-800",
};

const OrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { orders = [], error } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      showToast(`${error}`, "error", "api-error");
    }
    dispatch(getMyOrders);
    dispatch(getReviewsAction);
  }, [dispatch, error]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen mt-30">
      <div className="flex items-center justify-center mb-10 gap-2">
        <ShoppingBag className="text-pink-700" size={28} />
        <h1 className="text-3xl font-bold text-pink-700">My Orders</h1>
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">You haven’t ordered anything yet.</p>
      ) : (
        orders.map((order) => {
          const orderedOn = new Date(order.orderedAt).toLocaleDateString("en-IN");
          const paidOn = order.paidAt ? new Date(order.paidAt).toLocaleDateString("en-IN") : null;

          return (
            <div key={order._id} className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-blue-100">
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <p>
                  <span className="font-semibold text-gray-700">Order ID:</span>{" "}
                  {order.razorpayOrderId || order._id}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Ordered on:</span> {orderedOn}
                </p>
              </div>

              {/* Cart Items */}
              <div className="space-y-5">
                {order.cartItems.map((item, index) => {
                  const product = item.productId;
                  const expectedDate = new Date(order.expectedDeliveryDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b pb-4"
                    >
                      <Link to={`/product/${product._id}`} className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{product.title}</p>
                          <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </Link>

                      {/* Price & Review */}
                      <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-lg font-semibold text-green-600">
                          ₹ {product.price - product.discount}
                        </p>

                        {order.status === "Delivered" && (
                          <>
                            {typeof item.isReview === "number" ? (
                              <div className="flex items-center gap-1 mt-2 text-yellow-500 justify-center">
                                <Star size={16} fill="#facc15" className="text-yellow-400" />
                                <span className="text-sm font-medium text-gray-600">
                                  You rated: {item.isReview} / 5
                                </span>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleOpenModal(product)}
                                className="mt-2 text-sm text-pink-600 hover:underline flex items-center justify-center gap-1"
                              >
                                <Star size={16} className="text-yellow-400" />
                                Rate & Review
                              </button>
                            )}
                          </>
                        )}
                      </div>

                      <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm mb-1">Status</p>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            statusColorMap[order.status]
                          }`}
                        >
                          {order.status}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">Expected by {expectedDate}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer: Shipping + Total */}
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t pt-4">
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">Shipping:</p>
                  <p>
                    {order.shippingAddress.fullName}, {order.shippingAddress.city},{" "}
                    {order.shippingAddress.pincode}
                  </p>
                </div>

                <div className="text-right text-sm text-gray-700">
                  <p className="font-semibold">Total Amount: ₹{order.totalPrice}</p>
                  {order?.totalDiscount > 0 && (
                    <p className="text-green-600">Discount Saved: ₹{order?.totalDiscount}</p>
                  )}
                  {paidOn && <p className="text-gray-500 text-xs mt-1">Paid on: {paidOn}</p>}
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* Chat Button */}
      <div className="mt-10 text-center">
        <button className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-200 transition-all">
          <MessageSquareText size={16} />
          Chat with Us
        </button>
      </div>

      {/* Review Modal */}
      <ProductReview
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default OrderDetails;
