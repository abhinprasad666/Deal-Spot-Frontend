import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../../../redux/actions/passwordActions/verifyOtpAction";
import { clearPasswordState } from "../../../../redux/slices/passwordSlice";
import Loader from "../../../../components/layouts/Loader";
import logo from "../../../../../public/favicon.png";

const OTP_VALIDITY_DURATION = 300; // 5 minutes

const VerifyOtpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const inputRefs = useRef([]);
    const { loading, email } = useSelector((state) => state.password);

    const [secondsLeft, setSecondsLeft] = useState(OTP_VALIDITY_DURATION);
    const [isExpired, setIsExpired] = useState(false);

    // Start timer
    useEffect(() => {
        const storedStartTime = localStorage.getItem("otpStartTime");
        const now = Date.now();

        if (storedStartTime) {
            const elapsed = Math.floor((now - Number(storedStartTime)) / 1000);
            const remaining = OTP_VALIDITY_DURATION - elapsed;

            if (remaining <= 0) {
                setSecondsLeft(0);
                setIsExpired(true);
            } else {
                setSecondsLeft(remaining);
                setIsExpired(false);
            }
        } else {
            localStorage.setItem("otpStartTime", now.toString());
            setSecondsLeft(OTP_VALIDITY_DURATION);
            setIsExpired(false);
        }
    }, []);

    useEffect(() => {
        if (isExpired) return;
        const timer = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsExpired(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isExpired]);

    const formatTime = () => {
        const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
        const seconds = String(secondsLeft % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const handleChange = (index, event) => {
        const value = event.target.value;
        if (value.length === 1 && index < 5) {
            inputRefs.current[index + 1]?.focus();
        } else if (value.length === 0 && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const onSubmit = (data) => {
        const joinOtp = Object.values(data).join("");
        const otp = { otp: joinOtp };

        if (joinOtp.length === 6) {
            dispatch(verifyOtp(otp));
            navigate("/reset-password");
        }
    };

    const handleResendOtp = () => {
        localStorage.setItem("otpStartTime", Date.now().toString());
        setSecondsLeft(OTP_VALIDITY_DURATION);
        setIsExpired(false);
        reset();
        inputRefs.current[0]?.focus();
        // Add API to resend OTP here if needed
    };

    const handleChangeEmail = () => {
        localStorage.removeItem("otpStartTime");
        dispatch(clearPasswordState());
        navigate("/forgot-password");
    };

    const handleBackToHome = () => {
        localStorage.removeItem("otpStartTime");
        dispatch(clearPasswordState());
        navigate("/");
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
                        <div className="flex justify-center mb-4">
                            <img src={logo} alt="DealSpot Logo" className="w-12 h-12 rounded-full" />
                        </div>

                        <h1 className="text-center text-xl font-bold text-pink-600 mb-2">DealSpot</h1>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">OTP Verification</h2>
                        <p className="text-sm text-center text-green-700 mb-2">
                            A 6-digit OTP has been sent to your email:
                        </p>
                        <p className="text-center text-blue-700 font-semibold">{email}</p>

                        {!isExpired ? (
                            <p className="text-center text-sm text-gray-500 mb-4">
                                OTP valid for: <span className="font-semibold text-pink-600">{formatTime()}</span>
                            </p>
                        ) : (
                            <p className="text-center text-sm text-red-600 mb-4">OTP expired. Please resend.</p>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                            <div className="flex gap-2 justify-center">
                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        {...register(`digit${index}`, { required: true })}
                                        ref={(el) => {
                                            register(`digit${index}`, { required: true }).ref(el);
                                            inputRefs.current[index] = el;
                                        }}
                                        onChange={(e) => handleChange(index, e)}
                                        disabled={isExpired}
                                        className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={isExpired}
                                className={`w-full font-semibold py-2 px-4 rounded-lg transition duration-200 mt-4 ${
                                    isExpired
                                        ? "bg-gray-400 cursor-not-allowed text-white"
                                        : "bg-pink-600 hover:bg-pink-700 text-white"
                                }`}
                            >
                                Verify OTP
                            </button>
                        </form>

                        {isExpired && (
                            <div className="text-center mt-4">
                                <button
                                    onClick={handleResendOtp}
                                    className="text-sm text-pink-600 font-medium hover:underline"
                                >
                                    Resend OTP
                                </button>
                            </div>
                        )}

                        <div className="mt-6 flex justify-between items-center text-sm text-gray-600 font-medium">
                            <button
                                onClick={handleChangeEmail}
                                className="flex items-center gap-1 hover:underline text-pink-600"
                            >
                                ✉️ Change Email
                            </button>
                            <button onClick={handleBackToHome} className="flex items-center gap-1 hover:underline">
                                🔙 Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VerifyOtpPage;
