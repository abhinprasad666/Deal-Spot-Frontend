import { FaMapMarkerAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { clearShippingInfo } from "../../../redux/slices/productSlices/cartSlice";
import { useDispatch } from "react-redux";



const ShippingPreview = ({shippingInfo}) => {

  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleChangeAddress = () => {
    dispatch(clearShippingInfo())
    navigate("/shippingInfo");
  };

  const handleProceedToPayment = () => {
    navigate("/order/confirm");
  };

  return (
    <div className=" bg-white rounded-xl shadow-md border p-6 space-y-4 text-sm text-gray-800 max-w-2xl mx-auto mt-40 dark:bg-gray-700 dark:text-white">
      {/* Header */}
      <div className="flex items-center gap-2 text-pink-600 text-base font-semibold">
        <FaMapMarkerAlt className="text-lg" />
        <span>Shipping Details</span>
      </div>

      {/* Address Info */}
      <div>
      <div className="space-y-1">
        <p><span className="font-medium">Name:</span> {shippingInfo.fullName}</p>
        <p><span className="font-medium">Phone:</span> {shippingInfo.phone}</p>
        <p>
          <span className="font-medium">Address:</span>{" "}
          {shippingInfo.addressLine1}, {shippingInfo.city}
        </p>
        <p><span className="font-medium">Pincode:</span> {shippingInfo.pincode}</p>
        <p><span className="font-medium">State:</span> {shippingInfo.state}</p>
        <p><span className="font-medium">Country:</span> {shippingInfo.country}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-2 flex-wrap">
        <button
          onClick={handleChangeAddress}
          className="px-5 py-2 rounded-md border border-pink-600 text-pink-600 hover:bg-pink-50 transition duration-200 shadow-sm font-medium"
        >
          Change Address
        </button>
        <button
          onClick={handleProceedToPayment}
          className="px-5 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition duration-200 shadow-sm font-medium  dark:text-gray-200"
        >
          Proceed to Payment
        </button>
      </div>
      </div>
    </div>
  );
};

export default ShippingPreview;
