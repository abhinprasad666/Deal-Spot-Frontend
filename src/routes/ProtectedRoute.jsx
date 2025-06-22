import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/layouts/Loader";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" replace />;
    }

    if (isAuthenticated) {
        return children;
    }

    if (loading) {
        return <Loader />;
    }
};

export default ProtectedRoute;
