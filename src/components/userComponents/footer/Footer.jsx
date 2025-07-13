import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-800 bg-gray-900 text-gray-300 py-8 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Branding */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white hover:text-pink-600  transition duration-300 cursor-pointer
">
            Deal-Spot
          </h1>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Deal-Spot. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6 md:mb-0">
          <Link to="/about" className="hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition duration-300">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-white transition duration-300">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white transition duration-300">
            Terms
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <Link
            href="https://www.youtube.com/@dealspot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition duration-300 hover:text-[#FF0000]"
          >
            <i className="fab fa-youtube"></i>
          </Link>
          <Link
            href="https://www.instagram.com/dealspot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition duration-300 hover:text-[#E1306C]"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            href="https://www.facebook.com/dealspot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition duration-300 hover:text-[#1877F2]"
          >
            <i className="fab fa-facebook"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
