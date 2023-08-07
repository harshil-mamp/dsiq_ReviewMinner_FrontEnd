import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PasswordInput from "../../common/InputFeilds/PasswordInput/index";
import EmailInput from "../../common/InputFeilds/EmailInput/index";
import useFormValidation from "../../common/useFormValidation.js/index.js";
import LoginLeft from "./login-left";
import "./index.css";

const Login = () => {
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
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      validateEmail(email);
      validatePassword(password);
      return;
    }
    if (!emailError && !passwordError) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Row className="login-content">
      <Col className="login-left-part" span={12} md={6}>
        <LoginLeft />
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
              href="/"
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
