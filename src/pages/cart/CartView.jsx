import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import CartItemCard from "./CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  deleteCartItem,
  getCart,
  incremntQuantity,
} from "../../redux/actions/productActions/cartActions";
import { showToast } from "../../utils/toastUtils";
import { useNavigate } from "react-router-dom";

const CartView = () => {
  const { cartItems, cartError } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeItemId, setActiveItemId] = useState(null);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    dispatch(getCart);
  }, [dispatch]);

  useEffect(() => {
    if (cartError) {
      showToast(`${cartError}`, "error", "wishlist-toast");
    }
  }, [cartError]);

  const handleIncrement = async (id) => {
    setActiveItemId(id);
    setActionType("increment");
    try {
      // await Promise.resolve(dispatch(addToCart({ productId: params.id, quantity: 1 })));
      await Promise.resolve( dispatch(incremntQuantity(id)));
     await Promise.resolve(dispatch(getCart));
      showToast("Quantity incremented", "success", "wishlist-toast");
    } catch (err) {
      showToast("Something went wrong", "error", "wishlist-toast");
    } finally {
      setActiveItemId(null);
      setActionType("");
    }
  };

  const handleDecrement = async (id) => {
    setActiveItemId(id);
    setActionType("decrement");
    try {
     await Promise.resolve(dispatch(decrementQuantity(id)));
     await Promise.resolve(dispatch(getCart));
      showToast("Quantity decremented", "success", "wishlist-toast");
    } catch (err) {
      showToast("Something went wrong", "error", "wishlist-toast");
    } finally {
      setActiveItemId(null);
      setActionType("");
    }
  };

  const handleDelete = async (id) => {
    setActiveItemId(id);
    setActionType("delete");
    try {
      await Promise.resolve(dispatch(deleteCartItem(id)));
      await Promise.resolve(dispatch(getCart));
    } catch (err) {
      showToast("Failed to delete", "error", "wishlist-toast");
    } finally {
      setActiveItemId(null);
      setActionType("");
    }
  };

  const handleClearCart = async () => {
    await Promise.resolve(dispatch(clearCart()));
    dispatch(getCart);
  };

  const handleCkeckout = () => {
    navigate("/shippingInfo");
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-2 dark:text-gray-300">
        🛒 Your Shopping Cart
      </h1>

      {!cartItems?.items || cartItems.items.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <FaCartArrowDown className="text-6xl text-gray-400 mb-4 animate-bounce" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-gray-500">Start adding items to see them here!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={handleClearCart}
              className="text-red-600 hover:text-white hover:bg-red-600 border border-red-600 px-5 py-2 rounded-xl font-medium transition w-fit"
            >
              Clear Cart
            </button>

            {cartItems.items.map((item) => (
              <CartItemCard
                key={item._id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                activeItemId={activeItemId}
                actionType={actionType}
              />
            ))}
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm dark:bg-gray-700 ">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">Order Summary</h2>
            <div className="space-y-3 text-gray-700 text-sm dark:text-gray-200">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{cartItems.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Discount</span>
                <span className="text-green-600">- ₹{cartItems.totalDiscount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹0</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold text-lg text-gray-900">
                <span>Grand Total</span>
                <span>₹{cartItems.grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCkeckout}
              className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition font-medium"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
