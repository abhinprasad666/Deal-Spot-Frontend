import React from "react";
import { CheckCircle, UserPlus } from "lucide-react";

const SignupLeftPanel = () => {
  return (
    <div className="md:w-1/2 flex flex-col justify-center items-start p-12 bg-white shadow-md dark:bg-gray-900 ">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-4 animate-bounce flex items-center gap-2">
        <UserPlus className="w-8 h-8" /> DealSpot
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Join our platform and enjoy the benefits of smart, secure shopping.
      </p>
      <ul className="space-y-4 text-gray-700 text-sm">
        <li className="flex items-start gap-2 animate-pulse">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Secure registration with advanced password protection
        </li>
        <li className="flex items-start gap-2 animate-pulse delay-100">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Get instant access to personalized deals and exclusive products
        </li>
        <li className="flex items-start gap-2 animate-pulse delay-200">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Trusted by over <span className="font-semibold">10,000+ users</span> across India
        </li>
        <li className="flex items-start gap-2 animate-pulse delay-300">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Track orders, manage your profile, and much more
        </li>
      </ul>
    </div>
  );
};

export default SignupLeftPanel;