import { createBrowserRouter } from "react-router-dom";

// Layouts
import AuthLayout from "../components/layouts/AuthLayout";
import MainLayout from "../components/layouts/MainLayout";

// User Pages
import Home from "../pages/user/Homepage";
import Signup from "../pages/user/auth/Signup";
import Login from "../pages/user/auth/Login";
import NotFound from "../pages/user/NotFound";

// Payment Pages
import PaymentFailed from "../pages/user/payment/PaymentFailed";
import PaymentSuccess from "../pages/user/payment/PaymentSuccess";

// Product Pages
import ProductSearch from "../components/home/allProducts/ProductSearch";
import ProductDetails from "../pages/user/productDetails/ProductDetails";

// Password Recovery Pages
import ForgotPasswordPage from "../pages/user/auth/password/ForgotPasswordPage";
import VerifyOtpPage from "../pages/user/auth/password/VerifyOtpPage";
import ResetPasswordPage from "../pages/user/auth/password/ResetPasswordPage";
import ResetErrorPage from "../pages/user/auth/password/ResetErrorPage";
import PasswordResetSuccessPage from "../pages/user/auth/password/PasswordResetSuccessPage";
import ProtectedRoute from "./ProtectedRoute";

//userprofile
import UserProfilePage from "../pages/user/profile/UserProfilePage";
import EditProfilePage from "../pages/user/profile/editProfile/EditProfilePage";

//cart
import CartView from "../pages/cart/CartView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "product/:id", element: <ProductDetails /> },
            { path: "product/search/:keyword", element: <ProductSearch /> },
            {
                path: "user-profile",
                element: (
                    <ProtectedRoute>
                        <UserProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "edit-profile",
                element: (
                    <ProtectedRoute>
                        <EditProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "cart",
                element: (
                    <ProtectedRoute>
                        <CartView />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [{ path: "", element: <Login /> }],
    },

    {
        path: "/signup",
        element: <AuthLayout />,
        children: [{ path: "", element: <Signup /> }],
    },
    {
        path: "/forgot-password",
        element: <AuthLayout />,
        children: [{ path: "", element: <ForgotPasswordPage /> }],
    },
    {
        path: "/verify-otp",
        element: <AuthLayout />,
        children: [{ path: "", element: <VerifyOtpPage /> }],
    },
    {
        path: "/reset-password",
        element: <AuthLayout />,
        children: [{ path: "", element: <ResetPasswordPage /> }],
    },
    {
        path: "/password-update-success",
        element: <AuthLayout />,
        children: [{ path: "", element: <PasswordResetSuccessPage /> }],
    },
    {
        path: "/reset-error",
        element: <AuthLayout />,
        children: [{ path: "", element: <ResetErrorPage /> }],
    },
    {
        path: "/payment/success",
        element: <PaymentSuccess />,
    },
    {
        path: "/payment/failure",
        element: <PaymentFailed />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
