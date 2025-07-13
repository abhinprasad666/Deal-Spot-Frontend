import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import { clearPasswordState } from "../../../redux/slices/passwordSlice";
import Loader from "../../../components/common/Loader";

const ResetErrorPage = () => {
  const { error, loading } = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoHome = () => {
    localStorage.removeItem("otpStartTime"); // clear countdown
    dispatch(clearPasswordState());
    navigate("/");
  };

  const handleTryAgain = () => {
    localStorage.removeItem("otpStartTime"); // clear countdown
    dispatch(clearPasswordState());
    navigate("/forgot-password");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
          <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Password Reset Failed!</h2>
            <p className="text-red-500 mb-6">{error ? error : "Something went wrong!"}</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleGoHome}
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Go to Homepage
              </button>

              <button
                onClick={handleTryAgain}
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetErrorPage;
