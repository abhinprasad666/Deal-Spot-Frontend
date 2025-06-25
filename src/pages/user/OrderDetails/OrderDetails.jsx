import React from "react";

const OrderDetails = () => {
  const order = {
    _id: "ORD123456",
    razorpayOrderId: "RZP123456789",
    userId: "USER987654",
    paymentMethod: "onlinePayment",
    status: "Confirmed",
    totalPrice: 2499,
    paidAt: "2024-06-01T12:34:56Z",
    orderedAt: "2024-06-01T11:30:00Z",
    shippingAddress: {
      fullName: "Abhin Prasad",
      phone: "9876543210",
      addressLine1: "123 Main Street",
      city: "Kochi",
      pincode: "682001",
      country: "India",
      state: "Kerala",
    },
    cartItems: [
      {
        productId: {
          _id: "PROD001",
          name: "Noise Smartwatch",
          image: "https://via.placeholder.com/100",
          price: 1499,
        },
        quantity: 1,
      },
      {
        productId: {
          _id: "PROD002",
          name: "boAt Rockerz Headphones",
          image: "https://via.placeholder.com/100",
          price: 999,
        },
        quantity: 1,
      },
    ],
    statusHistory: [
      {
        status: "Pending",
        changedAt: "2024-06-01T11:30:00Z",
      },
      {
        status: "Confirmed",
        changedAt: "2024-06-01T12:00:00Z",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">🧾 Order Details</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
        <div className="bg-white shadow p-4 rounded-xl">
          <p><span className="font-semibold">Order ID:</span> {order._id}</p>
          <p><span className="font-semibold">Razorpay ID:</span> {order.razorpayOrderId}</p>
          <p><span className="font-semibold">User ID:</span> {order.userId}</p>
          <p><span className="font-semibold">Payment Method:</span> {order.paymentMethod}</p>
          <p><span className="font-semibold">Paid At:</span> {new Date(order.paidAt).toLocaleString()}</p>
          <p><span className="font-semibold">Ordered At:</span> {new Date(order.orderedAt).toLocaleString()}</p>
        </div>

        {/* Shipping Info */}
        <div className="bg-white shadow p-4 rounded-xl">
          <p className="font-semibold text-lg mb-2">Shipping Address</p>
          <p>{order.shippingAddress.fullName}</p>
          <p>{order.shippingAddress.phone}</p>
          <p>{order.shippingAddress.addressLine1}, {order.shippingAddress.city}</p>
          <p>{order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
          <p>{order.shippingAddress.country}</p>
        </div>
      </div>

      {/* Products */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🛍️ Ordered Products</h2>
        <div className="space-y-4">
          {order.cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white shadow p-4 rounded-xl"
            >
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.productId.name}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">Price: ₹{item.productId.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📦 Order Status</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {order.statusHistory.map((entry, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <span className="font-semibold">{entry.status}</span>
              <span className="text-gray-500">@ {new Date(entry.changedAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Total */}
      <div className="mt-8 bg-white shadow p-4 rounded-xl text-right text-lg font-bold text-gray-800">
        Grand Total: ₹{order.totalPrice}
      </div>
    </div>
  );
};

export default OrderDetails;
