import React, { useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import PayButton from "../PayButton";
import { useSelector } from "react-redux";

const ConfirmOrderPage = () => {
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};
   const { cartItems } = useSelector((state) => state.cart);

   const shippingCharge =0;
  const grandTotal=cartItems.grandTotal-shippingCharge

 const [payment,setPayment]=useState(false)


  return (
    <div className="mt-20">
      <CheckoutSteps shipping={true} confirmOrder={true} payment={payment} />

      <div className="min-h-screen bg-gray-100 py-8 px-4 pt-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Info */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>
              <div className="text-gray-700 text-sm space-y-1">
                <p><span className="font-medium">Name:</span> {shippingInfo.fullName}</p>
                <p><span className="font-medium">Phone:</span> {shippingInfo.phone}</p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {`${shippingInfo.addressLine1}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country} - ${shippingInfo.pincode}`}
                </p>
              </div>
            </div>

            {/* Cart Items */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
              <div className="space-y-4">
                {cartItems?.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <img
                        src={item?.productImage || ""}
                        alt={item?.productImage || ""}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex flex-col w-full">
                        <p className="text-sm font-medium text-gray-800 truncate w-full">
                          {item?.productName || ""}
                        </p>
                        <span className="text-xs text-gray-600">Qty: {item?.quantity || 0}</span>
                        <div className="text-xs text-gray-500 flex gap-2">
                          <span className="line-through">₹{item?.price || 0}</span>
                          <span className="text-green-600 font-semibold">
                            ₹{item?.subtotal/item?.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-700 min-w-max ml-2">
                      ₹{item?.subtotal || 0}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Sticky Order Summary */}
          <div className="h-fit sticky top-28 self-start">
            <div className="bg-white p-4 rounded shadow w-full">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span>₹{cartItems.totalPrice}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Total Discount</span>
                  <span>-₹{cartItems.totalDiscount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartItems.grandTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shippingCharge}</span>
                </div>
                <div className="flex justify-between font-semibold text-base border-t pt-2">
                  <span>Grand Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>
              <PayButton 
               amount={grandTotal}
               totalDiscount={cartItems.totalDiscount}
               shippingAddress={shippingInfo}
              paymentMethod={"onlinePayment"}
              setPayment={setPayment}
            
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
