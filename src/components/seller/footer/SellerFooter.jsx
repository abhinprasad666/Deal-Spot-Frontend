import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const SellerFooter = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-10 border-t ">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-6">
        
        {/* ✅ Navigation Links */}
        <div className="flex flex-col gap-2 md:gap-1">
          <p className="font-semibold text-gray-800 mb-1">Quick Links</p>
          <Link to="/seller/dashboard" className="hover:text-pink-600 transition">Dashboard</Link>
          <Link to="/seller/products" className="hover:text-pink-600 transition">Products</Link>
          <Link to="/seller/orders" className="hover:text-pink-600 transition">Orders</Link>
          <Link to="/support" className="hover:text-pink-600 transition">Support</Link>
        </div>

        {/* ✅ Contact Section */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-800 mb-1">Contact Us</p>
          <a href="mailto:seller@smartshop.com" className="flex items-center gap-2 hover:text-pink-600 transition">
            <Mail size={16} /> seller@smartshop.com
          </a>
        </div>

        {/* ✅ Social Icons */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-800 mb-1">Connect with us</p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Text */}
      <div className="border-t text-center py-3 text-xs text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} SmartShop Seller. All rights reserved.
      </div>
    </footer>
  );
};

export default SellerFooter;
