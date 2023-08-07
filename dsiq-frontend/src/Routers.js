import React from "react";

import Home from "./components/Home";
import Login from "./components/Auth/index";
import ForgotPwd from "./components/Auth/Login/ForgotPwd";
import Verify from "./components/Auth/Login/Verify";

import { Route, Routes, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route index exact path="/login" element={<Login />} />
        <Route index exact path="/forgot-password" element={<ForgotPwd />} />
        <Route index exact path="/verify" element={<Verify />} />

        {/* Temporary 404 component */}
        <Route path="*" element={<h1>Not Found</h1>} />

        {/* initially redirect to /login */}
        <Route path="/login" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default Routers;
