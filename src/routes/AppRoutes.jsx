import { createBrowserRouter } from "react-router-dom";

// Layouts

import AuthLayout from "../layouts/authLayout/AuthLayout";
import MainLayout from "../layouts/userLayout/MainLayout";
// Pages
import Home from "../pages/userPages/homePage/Homepage";
import Signup from "../pages/authPages/singup/Signup";
import Login from "../pages/authPages/login/Login";
import NotFound from "../pages/userPages/notFound/NotFound";
import PaymentFailed from "../pages/userPages/payment/PaymentFailed";
import PaymentSuccess from "../pages/userPages/payment/PaymentSuccess";
import ProductSearch from "../components/userComponents/home/allProducts/ProductSearch";
import ProductDetails from "../pages/userPages/productDetails/ProductDetails";
import ForgotPasswordPage from "../pages/authPages/password/ForgotPasswordPage";
import VerifyOtpPage from "../pages/authPages/password/VerifyOtpPage";
import ResetPasswordPage from "../pages/authPages/password/ResetPasswordPage";
import ResetErrorPage from "../pages/authPages/password/ResetErrorPage";
import PasswordResetSuccessPage from "../pages/authPages/password/PasswordResetSuccessPage";
import UserProfilePage from "../pages/userPages/profile/profilePage/UserProfilePage";
import EditProfilePage from "../pages/userPages/profile/editProfile/EditProfilePage";
import CartView from "../pages/userPages/cart/CartView";
import ShippingAddressForm from "../pages/userPages/checkout/ShippingAddressForm";
import ConfirmOrderPage from "../pages/userPages/checkout/ConfirmOrderPage";
import CheckoutPage from "../pages/userPages/checkout/CheckoutPage";
import OrderDetails from "../pages/userPages/OrderDetails/OrderDetails";
import  CategoryProductsPage from "../pages/userPages/categoryProducts/CategoryProductsPage"
// Middleware user
import ProtectedRoute from "./ProtectedRoute";

//seller

import SellerDashboard from "../components/sellerComponents/sellerDashboard/SellerDashboard";
import SellerProducts from "../pages/sellerPages/products/SellerProducts";
import AddProduct from "../pages/sellerPages/products/AddProduct";
import EditProduct from "../pages/sellerPages/products/EditProduct";
import WelcomeSeller from "../redux/slices/seller/WelcomeSeller";
import SellerMainLayout from "../layouts/sellerLayout/SellerMainLayout";
import RegisterAsSeller from "../pages/authPages/registerSeller/RegisterAsSeller";
import SellerProfile from "../pages/sellerPages/profile/SellerProfile";
import UpdateSellerProfile from "../pages/sellerPages/profile/UpdateSellerProfile";
import SellerOrdersList from "../pages/sellerPages/orderList/SellerOrdersList";
import SellerReviewList from "../pages/sellerPages/reviewList/SellerReviewList";
import SellerProductReviews from "../pages/sellerPages/reviewList/SellerProductReviews";
import TotalUsersList from "../pages/sellerPages/totalUsersList/TotalUsersList";



// import { CategoryProductsPage } from '../pages/';




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
                //  <ButtonLoader  bottomMessage={"We’re fetching your latest order details."}  fullPage={true} message="Just a moment" />
                element: <ProtectedRoute />,
                children: [
                    { path: "user-profile", element: <UserProfilePage /> },
                    { path: "edit-profile", element: <EditProfilePage /> },
                    { path: "myOrders", element: <OrderDetails /> },
                    { path: "cart", element: <CartView /> },
                    { path: "shippingInfo", element: <ShippingAddressForm /> },
                    { path: "order/confirm", element: <ConfirmOrderPage /> },
                    { path: "checkout", element: <CheckoutPage /> },

                    { path: "category/products/:categoryId", element: <CategoryProductsPage/> },
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
                    { path: "dashboard", element: <SellerDashboard /> },
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
        element:<WelcomeSeller isSeller/>
        
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
