import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, LogOut } from "lucide-react";
import { resetAllState } from "../../actions/resetStore";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authActions/logoutAction";

const WelcomeSeller = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();
  //logout re-login handler
  const logoutReLoginHandler=()=>{
    dispatch(logout());
    dispatch(resetAllState()) 
      navigate("/login")
  }  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-10 text-center">
      <div className="max-w-3xl space-y-6">
        <CheckCircle className="text-green-600 mx-auto w-16 h-16" />

        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Welcome to DealSpot Seller Hub!
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          🎉 Your seller account has been successfully created!
        </p>

        <div className="bg-white shadow-md rounded-xl p-6 text-left mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Next Steps to Activate Seller Mode
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              First, <strong>log out</strong> of your current account session.
            </li>
            <li>
              Then, <strong>log back in</strong> using the same email and password.
            </li>
            <li>
              After login, you’ll now see <strong>Seller Dashboard</strong> in the navbar.
            </li>
            <li>
              Click it to begin managing your shop, products, and orders!
            </li>
          </ol>

          <div className="text-yellow-600 mt-4 font-medium space-y-1">
            <p>⚠️ Don’t skip the logout step. If you don’t re-login, the system won’t recognize your seller role.</p>
            <p>⚠️ Without logout/login, you may face errors due to unchanged session roles.</p>
          </div>
        </div>

        <button
          onClick={logoutReLoginHandler}
          className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl animate-pulse"
        >
          <LogOut className="w-5 h-5" />
          Logout & Re-login Now
        </button>

        <p className="text-gray-600 text-sm mt-3">
          After login, click on <strong>Seller Dashboard</strong> to begin your journey.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSeller;
