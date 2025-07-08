import React from "react";
import LoginLeftPanel from "./LoginLeftPanel";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      <LoginLeftPanel />
      <LoginForm />
    </div>
  );
};

export default Login;
