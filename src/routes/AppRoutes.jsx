import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import MainLayout from "../components/layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

// Payment pages
import PaymentSuccess from "../pages/payment/PaymentSuccess";
import PaymentFailed from "../pages/payment/PaymentFailed";
import ProductSearch from "../components/home/allProducts/ProductSearch";

// Product Details Page
import ProductDetails from "../pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "product/search/:keyword", element: <ProductSearch/> },
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
