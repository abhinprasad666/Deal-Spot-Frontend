// components/auth/LoginLeftPanel.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

const LoginLeftPanel = () => {
  return (
    <div className="md:w-1/2 flex flex-col justify-center items-start p-12 text-left bg-white shadow-md animate-fadeIn">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-4">DealSpot</h1>
      <p className="text-gray-700 text-lg mb-6">
        Welcome to <span className="font-semibold text-pink-600">DealSpot</span> — where quality products meet passionate sellers.
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        <li className="flex items-start gap-2">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Fast and secure login with protected credentials
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Manage orders, profile & access seller tools
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="text-pink-500 w-5 h-5 mt-1" />
          Trusted by thousands of happy users
        </li>
      </ul>
    </div>
  );
};

export default LoginLeftPanel;
