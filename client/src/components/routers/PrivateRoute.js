import React from "react";
import { Route, Navigate } from "react-router-dom";
import * as R from "ramda";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
  console.log("Private route...");

  const { currentUser } = useAuth();

  console.log(currentUser);

  return !R.isNil(currentUser) ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
