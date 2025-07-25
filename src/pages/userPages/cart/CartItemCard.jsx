import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Loader from "../../../components/common/loaders/Loader";

const CartItemCard = ({
  item,
  onIncrement,
  onDecrement,
  onDelete,
  activeItemId,
  actionType,
}) => {
  const isLoading = activeItemId === item.productId._id;
  const stock = item.productId?.stock || 0;

  return (
    <div className="dark:bg-gray-700 flex flex-col sm:flex-row items-center bg-white border border-gray-200 shadow-sm p-4 rounded-2xl relative">
      <button
        onClick={() => onDelete(item.productId._id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <FiTrash2 size={18} />
      </button>

      <img
        src={item.productImage}
        alt={item.productName}
        className="w-28 h-28 rounded-lg object-cover border"
      />

      <div className="sm:ml-6 mt-4 sm:mt-0 flex-1 w-full">
        <h2 className="text-lg font-semibold text-gray-900">{item.productName}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-sm text-gray-600">
          <p className="dark:text-gray-300">
            <span className="font-medium">Price:</span> ₹{item.price}
          </p>
          <p className="dark:text-gray-200">
            <span className="font-medium text-green-600 dark:text-green-500">Discount:</span> ₹{item.discount}
          </p>
          <p className="dark:text-gray-300">
            <span className="font-medium">Delivery:</span> ₹{item.deliveryCharge}
          </p>
        </div>

        {/* ✅ Stock Display */}
        <p className={`mt-2 text-sm font-medium ${stock > 0 ? "text-green-500" : "text-red-500"}`}>
          {stock > 0 ? `In Stock (${stock} left)` : "Out of Stock"}
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-sm text-gray-700 font-medium">Quantity:</span>
          <div className="flex items-center border rounded-lg overflow-hidden w-fit">
            <button
              onClick={() => onDecrement(item.productId._id)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
              disabled={isLoading && actionType === "decrement"}
            >
              -
            </button>

            <span className="w-8 h-8 flex items-center justify-center text-gray-800 text-sm dark:text-gray-300">
              {isLoading ? <Loader size="20" /> : item.quantity}
            </span>

            <button
              onClick={() => onIncrement(item.productId._id)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
              disabled={isLoading && actionType === "increment"}
            >
              +
            </button>
          </div>

          <span className="ml-auto font-semibold text-sm text-gray-800 dark:text-gray-300">
            Subtotal: ₹{item.subtotal}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
