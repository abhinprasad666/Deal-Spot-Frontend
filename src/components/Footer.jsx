// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">Deal-Spot</h1>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Deal-Spot. All rights reserved.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="/about"
            className="hover:text-white transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/dealspot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.764v2.31h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.325-.6 1.325-1.342V1.342C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/dealspot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.95 13.95 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.922 4.922 0 0 0 4.596 3.417A9.867 9.867 0 0 1 0 21.543a13.933 13.933 0 0 0 7.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/dealspot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.003.25 2.47.415a4.92 4.92 0 0 1 1.675 1.01 4.92 4.92 0 0 1 1.01 1.675c.165.467.358 1.264.415 2.47.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.057 1.206-.25 2.003-.415 2.47a4.92 4.92 0 0 1-1.01 1.675 4.92 4.92 0 0 1-1.675 1.01c-.467.165-1.264.358-2.47.415-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.206-.057-2.003-.25-2.47-.415a4.92 4.92 0 0 1-1.675-1.01 4.92 4.92 0 0 1-1.01-1.675c-.165-.467-.358-1.264-.415-2.47C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.057-1.206.25-2.003.415-2.47a4.92 4.92 0 0 1 1.01-1.675 4.92 4.92 0 0 1 1.675-1.01c.467-.165 1.264-.358 2.47-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.012 7.052.07 5.775.127 4.658.327 3.678.678 2.687 1.03 1.9 1.605 1.17 2.334.44 3.064-.135 3.852-.486 4.843c-.35.98-.55 2.097-.606 3.374C-.012 8.332 0 8.74 0 12c0 3.26-.012 3.668.07 4.948.057 1.277.257 2.394.606 3.374.351.991.926 1.779 1.656 2.509.73.73 1.518 1.305 2.509 1.656.98.35 2.097.55 3.374.606 1.28.058 1.688.07 4.948.07s3.668-.012 4.948-.07c1.277-.057 2.394-.257 3.374-.606.991-.351 1.779-.926 2.509-1.656.73-.73 1.305-1.518 1.656-2.509.35-.98.55-2.097.606-3.374.058-1.28.07-1.688.07-4.948s-.012-3.668-.07-4.948c-.057-1.277-.257-2.394-.606-3.374-.351-.991-.926-1.779-1.656-2.509-.73-.73-1.518-1.305-2.509-1.656-.98-.35-2.097-.55-3.374-.606C15.668.012 15.26 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
