import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/home" />;
};
export default PrivateRoute;
