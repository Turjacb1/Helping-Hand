import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute to check user authentication
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }
  // If authenticated, render the children (protected component)
  return children;
};

export default ProtectedRoute;
