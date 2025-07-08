// src/components/checkout/ShippingAddressPage.jsx

import { useForm } from "react-hook-form";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Country, State } from "country-state-city";
import { saveShippingInfo } from "../../redux/slices/productSlices/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";
import ShippingPreview from "./ShippingPreview";

const ShippingAddressPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shippingAddress = JSON.parse(localStorage.getItem("shippingInfo")) ||{};
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const {shippingInfo}=useSelector(state=>state.cart)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(saveShippingInfo(data));
    navigate("/order/confirm");
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const selectedCountry = watch("country");

  useEffect(() => {
    const country = countries.find((c) => c.name === selectedCountry);
    if (country) {
      setStates(State.getStatesOfCountry(country.isoCode));
    } else {
      setStates([]);
    }
  }, [selectedCountry, countries]);

  return (
    <div className="pt-10 bg-gray-100 min-h-screen dark:bg-gray-900">
    
      <CheckoutSteps shipping={true} confirmOrder={false} payment={false} />
   {shippingInfo? <ShippingPreview shippingInfo={shippingAddress}/>:
   
      <div className="flex justify-center px-4 py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl bg-white rounded-md shadow-md p-6 space-y-4  dark:bg-gray-800"
        >
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 text-center flex justify-center items-center gap-2">
            <FaShippingFast className="text-2xl text-pink-600" />
            Shipping Address
          </h2>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "Full Name",
                name: "fullName",
                placeholder: "John Doe",
                rules: { required: "Full name is required" },
              },
              {
                label: "Phone Number",
                name: "phone",
                placeholder: "9876543210",
                rules: {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                },
              },
              {
                label: "Address Line 1",
                name: "addressLine1",
                placeholder: "House No, Street",
                rules: { required: "Address is required" },
              },
              {
                label: "City",
                name: "city",
                placeholder: "City Name",
                rules: { required: "City is required" },
              },
              {
                label: "Pincode",
                name: "pincode",
                placeholder: "600001",
                rules: {
                  required: "Pincode is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Enter a valid 6-digit pincode",
                  },
                },
              },
            ].map(({ label, name, placeholder, rules }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label} <span className="text-red-500">*</span>
                </label>
                <input
                  {...register(name, rules)}
                  placeholder={placeholder}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
                {errors[name] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[name].message}
                  </p>
                )}
              </div>
            ))}

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                {...register("country", { required: "Country is required" })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.isoCode} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select
                {...register("state", { required: "State is required" })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s.isoCode} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-md transition"
            >
             Proceed to Payment
            </button>
          </div>
        </form>
      </div>}
    
    </div>
  );
};

export default ShippingAddressPage;
