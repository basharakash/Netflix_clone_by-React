/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const ProtectedRoute = () => {
    const { user } = UserAuth();
    return !user ? <Navigate to="/login" /> :  <Outlet/>;
};

export default ProtectedRoute;
