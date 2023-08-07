import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PasswordInput from "../common/PasswordInput/index";
import EmailInput from "../common/EmailInput/index";
import LoginPic from "../../assets/img/login-page.svg";
import useFormValidation from "../common/useFormValidation.js/index.js";

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
    <Container>
      <Row>
        <Col span={12} md={6}>
          <img className="vh-100" src={LoginPic} alt="Login" />
        </Col>
        <Col
          span={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Form className="w-100" onSubmit={handleSubmit}>
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
                <a href="/forgot-password">Can't access your account?</a>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <a className="fs-subhead" href="/">
                Create a new account
              </a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
