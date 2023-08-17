import React, { useEffect, useState } from "react";

import ErrorPage from "./components/View/error";
import Home from "./components/Home";
import Login from "./components/Auth/Login/index";
import ForgotPwd from "./components/Auth/Login/ForgotPwd";
import Verify from "./components/Auth/Login/Verify";
import Register from "./components/Auth/Register/index";
import Success from "./components/Auth/Register/success";
import Failed from "./components/Auth/Register/failed";

import { Route, Routes, Navigate } from "react-router-dom";

const Routers = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          index
          exact
          path="/"
          element={
            localStorage.getItem("access_token") ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route index exact path="/login" element={<Login />} />
        <Route index exact path="/forgot-password" element={<ForgotPwd />} />
        <Route index exact path="/verify" element={<Verify />} />

        <Route index exact path="/register" element={<Register />} />
        <Route index exact path="/success" element={<Success />} />
        <Route index exact path="/failed" element={<Failed />} />
        {/* Temporary 404 component */}
        <Route path="*" element={<ErrorPage />} />

        {/* initially redirect to /login */}
        <Route path="/login" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default Routers;
