import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import PrimaryBtn from "../../common/Buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../common/InputFeilds/EmailInput";
import useFormValidation from "../../common/useFormValidation.js/index.js";
import AuthLeft from "../auth-left";
import axios from "../../api/axios";
const FORGOTPW = "/forgot_pw";

const ForgotPwd = () => {
  const { email, setEmail, validateEmail, emailError } = useFormValidation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      validateEmail(email);
      return;
    }
    if (!emailError) {
      setEmail("");
      navigate("/verify");
    }

    setLoading(true);

    try {
      const response = await axios.post(FORGOTPW, JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
        Accept: "application/json",
      });

      if (response.ok) {
        setEmail("");
        navigate("/verify");
      } else {
        console.error("Error sending email:", response.status);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
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
        className="login-right-part d-flex justify-content-center align-items-center"
      >
        <div>
          <h3 className="text-center mt-5 mt-md-0 fw-bold">
            Can't Access Account
          </h3>
          <p className="fs-p m-3 pb-5 text-center fw-normal">
            Please enter your login email address, so you will receive an email
            for reset your password.
          </p>
          <Form
            className="mx-auto position-relative shadow-container p-4 d-flex flex-column justify-content-center"
            onSubmit={handleSubmit}
          >
            <EmailInput
              value={email}
              onChange={validateEmail}
              emailError={emailError}
            />
            <div className="mb-3 d-flex justify-content-end align-items-center">
              {/* <Button variant="primary" type="submit">
                {loading ? "Sending..." : "Verify"}
              </Button> */}
              <PrimaryBtn text={loading ? "Sending..." : "Verify"} />
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default ForgotPwd;
