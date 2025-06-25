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

// Profile & Cart
import UserProfilePage from "../pages/user/profile/UserProfilePage";
import EditProfilePage from "../pages/user/profile/editProfile/EditProfilePage";
import CartView from "../pages/cart/CartView";

// Checkout
import ShippingAddressForm from "../components/checkout/ShippingAddressForm";
import ConfirmOrderPage from "../components/checkout/ConfirmOrderPage";
import CheckoutPage from "../pages/user/CheckoutPage";

// Auth Middleware
import ProtectedRoute from "./ProtectedRoute";
import OrderDetails from "../pages/user/OrderDetails/OrderDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "product/:id", element: <ProductDetails /> },
            { path: "product/search/:keyword", element: <ProductSearch /> },
        ],
    },

    //  Grouped all protected routes under one ProtectedRoute wrapper
    {
        element: <ProtectedRoute />,
        children: [
            { path: "/user-profile", element: <UserProfilePage /> },
            { path: "/edit-profile", element: <EditProfilePage /> },
            { path: "/cart", element: <CartView /> },
            { path: "/shippingInfo", element: <ShippingAddressForm /> },
            { path: "/order/confirm", element: <ConfirmOrderPage /> },
            { path: "/checkout", element: <CheckoutPage /> },
            { path: "/myOrders", element: <OrderDetails/> },
        ],
    },

    // Auth pages
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

    // Payment status
    { path: "/payment/success", element: <PaymentSuccess /> },
    { path: "/payment/failure", element: <PaymentFailed /> },

    // Not found
    { path: "*", element: <NotFound /> },
]);

export default router;
