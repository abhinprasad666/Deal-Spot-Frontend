import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../components/layouts/Loader';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // Show loading spinner while verifying auth
  if (loading) {
    return (
      <Loader></Loader>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, show protected content
  return children;
};

export default ProtectedRoute;
