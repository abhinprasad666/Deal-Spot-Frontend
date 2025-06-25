import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Loader from "../../components/common/Loader";

const CartItemCard = ({ item, onIncrement, onDecrement, onDelete, activeItemId, actionType }) => {
    const isUpdatingQty = activeItemId === item.productId._id;

    return (
        <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 shadow-sm p-4 rounded-2xl relative">
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
                    <p><span className="font-medium">Price:</span> ₹{item.price}</p>
                    <p><span className="font-medium text-green-600">Discount:</span> ₹{item.discount}</p>
                    <p><span className="font-medium">Delivery:</span> ₹{item.deliveryCharge}</p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                    <span className="text-sm text-gray-700 font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-lg overflow-hidden w-fit">
                        <button
                            onClick={() => onDecrement(item.productId._id)}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
                            disabled={isUpdatingQty && actionType === "decrement"}
                        >
                            -
                        </button>

                        <span className="w-8 h-8 flex items-center justify-center text-gray-800 text-sm">
                            {isUpdatingQty ? <Loader size="20" /> : item.quantity}
                        </span>

                        <button
                            onClick={() => onIncrement(item.productId._id)}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
                            disabled={isUpdatingQty && actionType === "increment"}
                        >
                            +
                        </button>
                    </div>

                    <span className="ml-auto font-semibold text-sm text-gray-800">
                        Subtotal: ₹{item.subtotal}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
