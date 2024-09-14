import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

    if (!isLoggedIn) {
        return <Navigate to="/" />
    }
  return children;
}

export default ProtectedRoutes;