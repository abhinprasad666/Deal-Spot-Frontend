import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch from localStorage (shipping)
  useEffect(() => {
    const savedShipping = localStorage.getItem("shippingInfo");
    if (savedShipping) {
      navigate("/shipping-address"); // If no address, redirect
    } else {
      setShippingInfo(JSON.parse(savedShipping));
    }
  }, [navigate]);

  // Fetch cart from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("/api/cart/me");
        setCartItems(data.items);
      } catch (err) {
        console.error("Cart error", err);
      }
    };
    fetchCart();
  }, []);

  // Calculate totals
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.offerPrice * item.quantity,
    0
  );

  const deliveryCharge = totalPrice > 1000 ? 0 : 49;
  const grandTotal = totalPrice + deliveryCharge;

  // Order placing logic (can be replaced by Razorpay flow)
  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      const payload = {
        shippingInfo,
        items: cartItems.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        totalPrice,
        grandTotal,
      };

      const { data } = await axios.post("/api/orders", payload);
      setLoading(false);
      localStorage.removeItem("shippingInfo");
      navigate(`/order/${data.orderId}`);
    } catch (err) {
      setLoading(false);
      console.error("Order Error", err);
      alert("Something went wrong while placing order");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Shipping Address */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            <FaCheckCircle className="inline text-green-500 mr-2" />
            Shipping Details
          </h2>
          {shippingInfo ? (
            <div className="space-y-2 text-gray-700">
              <p><strong>Name:</strong> {shippingInfo.fullName}</p>
              <p><strong>Phone:</strong> {shippingInfo.phone}</p>
              <p><strong>Address:</strong> {shippingInfo.addressLine1}, {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.country} - {shippingInfo.pincode}</p>
            </div>
          ) : (
            <p className="text-red-500">Shipping address not found</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h2>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between text-gray-700 border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">
                  ₹{item.product.offerPrice * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-2 text-gray-800">
            <div className="flex justify-between">
              <span>Items Total:</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges:</span>
              <span className={deliveryCharge === 0 ? "text-green-600" : ""}>
                {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Grand Total:</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
