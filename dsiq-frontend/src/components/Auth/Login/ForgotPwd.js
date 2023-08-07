import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../common/EmailInput";
import useFormValidation from "../../common/useFormValidation.js/index.js";
import ForgotPwdImg from "../../../assets/img/forgot-pwd.svg";

const ForgotPwd = () => {
  const { email, setEmail, validateEmail, emailError } = useFormValidation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      validateEmail(email);
      return;
    }
    if (!emailError) {
      setEmail("");
      navigate("/verify");
    }
  };

  return (
    <Container>
      <Row>
        <Col span={12} md={6}>
          <img className="vh-100" src={ForgotPwdImg} alt="Forgot Password" />
        </Col>
        <Col
          span={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h3 className="text-center fw-bold">Can't Access Account</h3>
            <p className="fs-p my-3 text-center fw-normal">
              Please enter your login email address, so you will receive an
              email for reset your password.
            </p>
            <Form
              className="w-100 py-5 position-relative"
              onSubmit={handleSubmit}
            >
              <EmailInput
                value={email}
                onChange={validateEmail}
                emailError={emailError}
              />
              <div className="mb-3 d-flex justify-content-end align-items-center">
                <Button variant="primary" type="submit">
                  Verify
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPwd;
