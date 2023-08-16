import React, { useRef, useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import PasswordInput from "../../common/InputFeilds/PasswordInput/index";
import EmailInput from "../../common/InputFeilds/EmailInput/index";
import useFormValidation from "../../common/useFormValidation.js/index.js";
import AuthLeft from "../auth-left";
import "./index.css";

import axios from "../../api/axios";
import AuthContext from "../../context/AuthProvider";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");

  const {
    email,
    setEmail,
    validateEmail,
    emailError,
    password,
    setPassword,
    validatePassword,
    passwordError,
    showPassword,
    togglePasswordVisibility,
  } = useFormValidation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      validateEmail(email);
      validatePassword(password);
      return;
    }

    if (!emailError && !passwordError) {
      try {
        const loginDetails = {
          email: email,
          password: password,
        };

        console.log("*", loginDetails);

        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify(loginDetails),
          {
            headers: { "Content-Type": "application/json" },
            Accept: "application/json",
            // withCredentials: true,
          }
        );
        console.log("****", response);
        setEmail("");
        setPassword("");
        const AccessToken = response?.data?.AccessToken;
        setAuth({ email, password, AccessToken });
        // if (response.ok) {
        //   console.log("Login successful");
        // } else {
        //   console.error("Login failed");
        // }
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      }
    }
  };

  return (
    <Row className="login-content">
      <Col className="login-left-part" span={12} md={6}>
        <AuthLeft />
      </Col>
      <Col
        span={12}
        md={6}
        className="login-right-part p-0 d-flex justify-content-center align-items-center"
      >
        <Form
          className="shadow-container p-4 d-flex flex-column justify-content-center"
          onSubmit={handleSubmit}
        >
          <p
            style={{ height: "56px" }}
            ref={errRef}
            className={
              errMsg
                ? "text-center p-3 text-danger"
                : "text-center p-3 offscreen"
            }
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <EmailInput
            value={email}
            onChange={validateEmail}
            emailError={emailError}
          />
          <PasswordInput
            value={password}
            onChange={validatePassword}
            showPassword={showPassword}
            togglePassword={togglePasswordVisibility}
            passwordError={passwordError}
          />

          <div className="mb-5 d-flex justify-content-between align-items-center">
            <div>
              <a href="/forgot-password" style={{ color: "#3f4b55" }}>
                Can't access your account?
              </a>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <a
              className="fs-subp"
              style={{ color: "#3f4b55", fontWeight: 600 }}
              href="/register"
            >
              Create a new account
            </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
