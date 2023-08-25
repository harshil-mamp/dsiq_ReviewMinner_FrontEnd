import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorPage from "./components/View/error";
import Home from "./components/Home";
import Login from "./components/Auth/Login/index";
import ForgotPwd from "./components/Auth/Login/ForgotPwd";
import Verify from "./components/Auth/Login/Verify";
import Register from "./components/Auth/Register/index";
import Success from "./components/Auth/Register/success";
import Failed from "./components/Auth/Register/failed";

import Navbars from "./components/Global/Navbars/index";
import Sidebar from "./components/Global/Sidebar";
// Examples
import Settings from "./components/View/example/settings";
import Reviews from "./components/View/example/reviews";
import Users from "./components/View/example/users";
import Dashboard from "./components/View/example/dashboard";

import { Route, Routes, Navigate } from "react-router-dom";

const Routers = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  const navigate = useNavigate();

  const checkAccessTokenValidity = () => {
    const token = localStorage.getItem("access_token");
    console.log("***", token);
    if (!token) {
      navigate("/login");
      return;
    }
    // Additional logic to check token validity, e.g., expiration time
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
    checkAccessTokenValidity();
  }, []);

  const redirectToHomeIfLoggedIn = (element) => {
    return accessToken ? <Navigate to="/" replace /> : element;
  };

  return (
    <div>
      {accessToken && (
        <div>
          <div>
            <Sidebar>
              <Routes>
                <Route index exact path="/" element={<Home />} />

                <Route index exact path="/settings" element={<Settings />} />
                <Route index exact path="/reviews" element={<Reviews />} />
                <Route index exact path="/users" element={<Users />} />
                <Route index exact path="/dashboard" element={<Dashboard />} />
                {/* Temporary 404 component */}
                <Route path="*" element={<ErrorPage />} />

                {/* initially redirect to /login */}
                <Route
                  path="/login"
                  element={<Navigate replace to="/login" />}
                />
              </Routes>
            </Sidebar>
          </div>
          <div>
            <Navbars>
              <div className="navbar-height"></div>
              <Routes>
                <Route index exact path="/" element={<Home />} />

                <Route index exact path="/settings" element={<Settings />} />
                <Route index exact path="/reviews" element={<Reviews />} />
                <Route index exact path="/users" element={<Users />} />
                <Route index exact path="/dashboard" element={<Dashboard />} />

                {/* Temporary 404 component */}
                <Route path="*" element={<ErrorPage />} />

                {/* initially redirect to /login */}
                <Route
                  path="/login"
                  element={<Navigate replace to="/login" />}
                />
              </Routes>
            </Navbars>
          </div>
        </div>
      )}
      <Routes>
        <Route
          index
          exact
          path="/login"
          element={redirectToHomeIfLoggedIn(<Login />)}
        />
        <Route
          index
          exact
          path="/register"
          element={redirectToHomeIfLoggedIn(<Register />)}
        />
        <Route
          index
          exact
          path="/forgot-password"
          element={redirectToHomeIfLoggedIn(<ForgotPwd />)}
        />
        <Route
          index
          exact
          path="/verify"
          element={redirectToHomeIfLoggedIn(<Verify />)}
        />

        <Route
          index
          exact
          path="/success"
          element={redirectToHomeIfLoggedIn(<Success />)}
        />
        <Route
          index
          exact
          path="/failed"
          element={redirectToHomeIfLoggedIn(<Failed />)}
        />
        {/* Temporary 404 component */}
        {/* <Route path="*" element={<ErrorPage />} /> */}

        {/* initially redirect to /login */}
        <Route path="/login" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default Routers;
