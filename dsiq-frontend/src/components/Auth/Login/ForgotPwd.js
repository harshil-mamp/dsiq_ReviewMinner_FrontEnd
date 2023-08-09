import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../common/InputFeilds/EmailInput";
import useFormValidation from "../../common/useFormValidation.js/index.js";
import AuthLeft from "../auth-left";

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
      const response = await fetch("http://localhost:5000/forgot_pw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Adjust the payload as needed
      });

      if (response.ok) {
        setEmail("");
        navigate("/verify");
      } else {
        // Handle error cases
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
              <Button variant="primary" type="submit">
                {loading ? "Sending..." : "Verify"}
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default ForgotPwd;
