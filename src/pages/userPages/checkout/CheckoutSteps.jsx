import { ShoppingCart, ClipboardList, CreditCard } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  { label: "Shipping", icon: ShoppingCart, route: "/shippingInfo" },
  { label: "Review", icon: ClipboardList, route: "/order/confirm" },
  { label: "Payment", icon: CreditCard,  },
];

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
  const navigate = useNavigate();
  const activeStatus = [shipping, confirmOrder, payment];

  return (
    <div className="sticky top-0 z-30 bg-white shadow-sm mt-10 dark:bg-gray-800">
      <div className="flex items-center justify-center py-4 px-2 sm:px-6">
        <div className="flex w-full max-w-4xl items-center justify-between relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStatus[index];
            const isCompleted = index === 0 || activeStatus[index - 1];

            return (
              <React.Fragment key={index}>
                {/* Circle with icon */}
                <div className="flex flex-col items-center z-10 cursor-pointer">
                  <div
                    onClick={() => {
                      if (isCompleted) navigate(step.route);
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    onClick={() => {
                      if (isCompleted) navigate(step.route);
                    }}
                    className={`mt-1 text-sm font-medium ${
                      isActive
                        ? "text-green-600"
                        : isCompleted
                        ? "text-gray-500"
                        : "text-gray-300 cursor-default"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Line between steps */}
                {index !== steps.length - 1 && (
                  <div className="flex-1 h-1 bg-gray-300 mx-1 sm:mx-4 relative">
                    <div
                      className={`absolute top-0 left-0 h-1 transition-all duration-500 ${
                        activeStatus[index + 1] ? "bg-green-500 w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
