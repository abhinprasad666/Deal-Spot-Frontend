import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import MainLayout from "../components/layouts/MainLayout";

// Payment Success/Failure Pages
import PaymentFailed from "../pages/payment/PaymentFailed";
import PaymentSuccess from "../pages/payment/PaymentSuccess";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      // Add other pages here like products, cart, etc.
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

  //  Payment Routes
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
