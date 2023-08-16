import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NameInput from "../../common/InputFeilds/NameInput";
import EmailInput from "../../common/InputFeilds/EmailInput";
import PasswordInput from "../../common/InputFeilds/PasswordInput";
import ConfirmPasswordInput from "../../common/InputFeilds/ConfirmPasswordInput";
import useFormValidation from "../../common/useFormValidation.js";
import AuthLeft from "../auth-left";
import CompanyInput from "../../common/InputFeilds/CompanyInput";

import axios from "../../api/axios";
const REGISTER_URL = "/register";
const Register = () => {
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
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
    fname,
    setFName,
    fNameError,
    validateFName,
    lname,
    setLName,
    lNameError,
    validateLName,
    company,
    setCompany,
    companyError,
    validateCompany,
  } = useFormValidation();
  const navigate = useNavigate();
  const errRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !email ||
      !password ||
      !fname ||
      !lname ||
      !confirmPassword ||
      !company
    ) {
      setErrMsg("Invalid Entry");
      validateFName(fname);
      validateLName(lname);
      validateEmail(email);
      validatePassword(password);
      validateConfirmPassword(confirmPassword);
      validateCompany(company);
      return;
    }

    const registerDetails = {
      email: email,
      password: password,
      first_name: fname,
      last_name: lname,
      company_name: company,
    };

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify(registerDetails),
        {
          headers: { "Content-Type": "application/json" },
          Accept: "application/json",
          // withCredentials: true,
        }
      );
      setFName("");
      setLName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setCompany("");
      navigate("/success");
    } catch (error) {
      console.error("Network error:", error);
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 404) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
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
        className="d-flex mb-5 mb-md-0 justify-content-center align-items-center"
      >
        <div>
          <h3 className="text-center fw-bold my-3">Create Your Account</h3>
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
          <Form
            className="shadow-container p-4 d-flex flex-column justify-content-center"
            onSubmit={handleSubmit}
          >
            <NameInput
              fvalue={fname}
              onChangeF={validateFName}
              fNameError={fNameError}
              lvalue={lname}
              onChangeL={validateLName}
              lNameError={lNameError}
            />
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
            <ConfirmPasswordInput
              value={confirmPassword}
              onChange={validateConfirmPassword}
              showPassword={showConfirmPassword}
              togglePassword={toggleConfirmPasswordVisibility}
              passwordError={confirmPasswordError}
            />
            <CompanyInput
              value={company}
              onChange={validateCompany}
              companyError={companyError}
            />
            <div className="mb-5 d-flex justify-content-between align-items-center">
              <div>
                <a href="/login" style={{ color: "#3f4b55" }}>
                  Already have an account
                </a>
              </div>
              <Button variant="primary" type="submit">
                Create Account
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
