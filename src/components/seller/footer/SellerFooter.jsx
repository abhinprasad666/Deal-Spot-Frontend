import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellerFooter = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Deal-Spot Seller Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Deal-Spot Seller Hub</h2>
            <p className="text-sm text-gray-300">
              Empower your business by reaching millions of customers across India. Manage, sell, and grow with confidence.
            </p>
          </div>

          {/* Seller Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/seller/dashboard" className="hover:underline">Dashboard</Link></li>
              <li><Link to="/seller/products" className="hover:underline">Manage Products</Link></li>
              <li><Link to="/seller/orders" className="hover:underline">Order History</Link></li>
              <li><Link to="/seller/analytics" className="hover:underline">Analytics</Link></li>
            </ul>
          </div>

          {/* Help & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Help & Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/seller/support" className="hover:underline">Seller Support</Link></li>
              <li><Link to="/seller/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/seller/policies" className="hover:underline">Seller Policies</Link></li>
              <li><Link to="/seller/community" className="hover:underline">Community</Link></li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#1877f2] flex items-center justify-center transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center transition-all">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#FF0000] flex items-center justify-center transition-colors">
                <FaYoutube className="text-white" />
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              📩 <Link to="/seller/contact" className="underline">Contact Seller Support</Link>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Deal-Spot. Powered by Sellers.</p>
        </div>
      </div>
    </footer>
  );
};

export default SellerFooter;
