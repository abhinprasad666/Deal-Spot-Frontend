import React, { useEffect } from "react";
import LoginLeftPanel from "./LoginLeftPanel";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../../../../utils/toastUtils";
import Loader from "../../../../components/common/Loader";

const Login = () => {


  const navigate = useNavigate();
  const { error, isAuthenticated, loginMessage } = useSelector((state) => state.auth);
  const location = useLocation();
  const redirect = location.state?.redirect || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
      if (loginMessage) {
        showToast("Login successful!", "success");
      }
    }
  }, [isAuthenticated, navigate, loginMessage, redirect]);

  useEffect(() => {
    if (error) {
      showToast(`${error}`, "error", "api-error");
    }
  }, [error]);

  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 ">
      <LoginLeftPanel />
      <LoginForm />
      
    </div>
  );
};

export default Login;
