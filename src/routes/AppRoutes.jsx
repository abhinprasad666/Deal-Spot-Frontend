import { createBrowserRouter } from "react-router-dom";

// ─── Layouts ──────────────────────────────────────────────────────────────
import AuthLayout from "../layouts/authLayout/AuthLayout";
import MainLayout from "../layouts/userLayout/MainLayout";
import SellerMainLayout from "../layouts/sellerLayout/SellerMainLayout";

// ─── Auth Pages ───────────────────────────────────────────────────────────
import Signup from "../pages/authPages/singup/Signup";
import Login from "../pages/authPages/login/Login";
import ForgotPasswordPage from "../pages/authPages/password/ForgotPasswordPage";
import VerifyOtpPage from "../pages/authPages/password/VerifyOtpPage";
import ResetPasswordPage from "../pages/authPages/password/ResetPasswordPage";
import ResetErrorPage from "../pages/authPages/password/ResetErrorPage";
import PasswordResetSuccessPage from "../pages/authPages/password/PasswordResetSuccessPage";
import RegisterAsSeller from "../pages/authPages/registerSeller/RegisterAsSeller";

// ─── User Pages ───────────────────────────────────────────────────────────
import Home from "../pages/userPages/homePage/Homepage";
import NotFound from "../pages/userPages/notFound/NotFound";
import PaymentFailed from "../pages/userPages/payment/PaymentFailed";
import PaymentSuccess from "../pages/userPages/payment/PaymentSuccess";
import ProductDetails from "../pages/userPages/productDetails/ProductDetails";
import CategoryProductsPage from "../pages/userPages/categoryProducts/CategoryProductsPage";
import UserProfilePage from "../pages/userPages/profile/profilePage/UserProfilePage";
import EditProfilePage from "../pages/userPages/profile/editProfile/EditProfilePage";
import CartView from "../pages/userPages/cart/CartView";
import ShippingAddressForm from "../pages/userPages/checkout/ShippingAddressForm";
import ConfirmOrderPage from "../pages/userPages/checkout/ConfirmOrderPage";
import CheckoutPage from "../pages/userPages/checkout/CheckoutPage";
import OrderDetails from "../pages/userPages/OrderDetails/OrderDetails";

// ─── Components ───────────────────────────────────────────────────────────
import ProductSearch from "../components/userComponents/home/allProducts/ProductSearch";

// ─── Seller Pages ─────────────────────────────────────────────────────────
import SellerDashboard from "../components/sellerComponents/sellerDashboard/SellerDashboard";
import SellerProducts from "../pages/sellerPages/products/SellerProducts";
import AddProduct from "../pages/sellerPages/products/AddProduct";
import EditProduct from "../pages/sellerPages/products/EditProduct";
import SellerProfile from "../pages/sellerPages/profile/SellerProfile";
import UpdateSellerProfile from "../pages/sellerPages/profile/UpdateSellerProfile";
import SellerOrdersList from "../pages/sellerPages/orderList/SellerOrdersList";
import SellerReviewList from "../pages/sellerPages/reviewList/SellerReviewList";
import SellerProductReviews from "../pages/sellerPages/reviewList/SellerProductReviews";
import TotalUsersList from "../pages/sellerPages/totalUsersList/TotalUsersList";
import WelcomeSeller from "../redux/slices/seller/WelcomeSeller";

// ─── Middleware ───────────────────────────────────────────────────────────
import ProtectedRoute from "./ProtectedRoute";
import BlockedUserPage from "../pages/userPages/BlockedUser/BlockedUserPage";

// ─── Router Setup ─────────────────────────────────────────────────────────
const router = createBrowserRouter([
  // ─── Public & Main User Routes ─────────────────────────────
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "product/search/:keyword", element: <ProductSearch /> },
      { path: "category/products/:categoryId", element: <CategoryProductsPage /> },
      // ─── Protected Routes for Logged-in Users ──────────────
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
         

          // ─── Seller Registration ───────────────────────────
          { path: "become-seller", element: <RegisterAsSeller /> },
        ],
      },
    ],
  },

  // ─── Seller Routes ─────────────────────────────────────────
  {
    path: "/seller",
    element: <ProtectedRoute isSeller={true} />,
    children: [
      {
        element: <SellerMainLayout />,
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

   // ─── Blocked user  ─────────────────────────────────────────
  {
    path: "/blocked/user",
    element: <BlockedUserPage isSeller />,
  },

  // ─── Welcome Seller ─────────────────────────────────────────
  {
    path: "/welcome/seller",
    element: <WelcomeSeller isSeller />,
  },

  // ─── Auth Routes ────────────────────────────────────────────
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

  // ─── Payment Result Pages ──────────────────────────────────
  { path: "/payment/success", element: <PaymentSuccess /> },
  { path: "/payment/failure", element: <PaymentFailed /> },

  // ─── Fallback: 404 Not Found ───────────────────────────────
  { path: "*", element: <NotFound /> },
]);

export default router;
