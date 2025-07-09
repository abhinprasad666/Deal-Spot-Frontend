import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../components/layouts/user/MainLayout";
import AuthLayout from "../components/layouts/user/AuthLayout";

// Pages
import Home from "../pages/user/Homepage";
import Signup from "../pages/user/auth/singup/Signup";
import Login from "../pages/user/auth/login/Login";
import NotFound from "../pages/user/NotFound";
import PaymentFailed from "../pages/user/payment/PaymentFailed";
import PaymentSuccess from "../pages/user/payment/PaymentSuccess";
import ProductSearch from "../components/home/allProducts/ProductSearch";
import ProductDetails from "../pages/user/productDetails/ProductDetails";
import ForgotPasswordPage from "../pages/user/auth/password/ForgotPasswordPage";
import VerifyOtpPage from "../pages/user/auth/password/VerifyOtpPage";
import ResetPasswordPage from "../pages/user/auth/password/ResetPasswordPage";
import ResetErrorPage from "../pages/user/auth/password/ResetErrorPage";
import PasswordResetSuccessPage from "../pages/user/auth/password/PasswordResetSuccessPage";
import UserProfilePage from "../pages/user/profile/UserProfilePage";
import EditProfilePage from "../pages/user/profile/editProfile/EditProfilePage";
import CartView from "../pages/cart/CartView";
import ShippingAddressForm from "../components/checkout/ShippingAddressForm";
import ConfirmOrderPage from "../components/checkout/ConfirmOrderPage";
import CheckoutPage from "../pages/user/CheckoutPage";
import OrderDetails from "../pages/user/OrderDetails/OrderDetails";

// Middleware user
import ProtectedRoute from "./ProtectedRoute";

//seller

import SellerDashboard from "../components/seller/sellerDashboard/SellerDashboard";
import SellerProducts from "../components/seller/products/SellerProducts";
import AddProduct from "../components/seller/products/AddProduct";
import EditProduct from "../components/seller/products/EditProduct";
import SellerOrdersList from "../components/seller/orderList/SellerOrdersList";
import TotalUsersList from "../components/seller/TotalUsersList";
import SellerReviewList from "../components/seller/reviewList/SellerReviewList";
import SellerProductReviews from "../components/seller/reviewList/SellerProductReviews";
import SellerProfile from "../components/seller/profile/SellerProfile";
import UpdateSellerProfile from "../components/seller/profile/UpdateSellerProfile";
import RegisterAsSeller from "../components/seller/RegisterAsSeller";
import WelcomeSeller from "../redux/slices/seller/WelcomeSeller";
import SellerMainLayout from "../components/layouts/seller/SellerMainLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            //  Public Routes
            { path: "", element: <Home /> },
            { path: "product/:id", element: <ProductDetails /> },
            { path: "product/search/:keyword", element: <ProductSearch /> },

            //  Protected Routes inside MainLayout
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "user-profile", element: <UserProfilePage /> },
                    { path: "edit-profile", element: <EditProfilePage /> },
                    { path: "myOrders", element: <OrderDetails /> },
                    { path: "cart", element: <CartView /> },
                    { path: "shippingInfo", element: <ShippingAddressForm /> },
                    { path: "order/confirm", element: <ConfirmOrderPage /> },
                    { path: "checkout", element: <CheckoutPage /> },
                    //seller register
                    { path: "become-seller", element: <RegisterAsSeller /> },
                ],
            },
        ],
    },

    //seller
    {
        path: "/seller",
        element: <ProtectedRoute isSeller={true} />,
        children: [
            {
                element: <SellerMainLayout/>,
                children: [
                    { path: "", element: <SellerDashboard /> },
                    { path: "products", element: <SellerProducts /> },
                    { path: "add-product", element: <AddProduct /> },
                    { path: "edit-product/:productId", element: <EditProduct /> },
                    { path: "orders", element: <SellerOrdersList /> },
                    { path: "users", element: <TotalUsersList /> },
                    { path: "reviews", element: <SellerReviewList /> },
                    { path: "product/:productId/reviews", element: <SellerProductReviews /> },
                    { path: "profile", element: <SellerProfile /> },
                    { path: "update-profile", element: <UpdateSellerProfile /> },
                ],
            },
        ],
    },


//welcome seller
     {
        path: "/welcome/seller",
        element:<WelcomeSeller/>
        
    },

    //  Auth Routes
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

    // Payment Status
    { path: "/payment/success", element: <PaymentSuccess /> },
    { path: "/payment/failure", element: <PaymentFailed /> },

    // 404 Page
    { path: "*", element: <NotFound /> },
]);

export default router;
