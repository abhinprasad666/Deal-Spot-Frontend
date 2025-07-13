// Signup.jsx
import React from "react";
import SignupLeftPanel from "./SignupLeftPanel";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      <SignupLeftPanel />
      <SignupForm />
    </div>
  );
};

export default Signup;