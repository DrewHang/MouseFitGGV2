import React, { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import * as R from "ramda";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  console.log("Public route...");

  const { currentUser } = useAuth();

  return R.isNil(currentUser) ? <Component /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
