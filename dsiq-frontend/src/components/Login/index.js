import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LoginPic from "../../assets/img/login-page.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!isValidEmail(email) || !isValidPwd(password)) {
      !isValidEmail(email)
        ? setEmailError("Invalid email format")
        : setEmailError("");
      !isValidPwd(password)
        ? setPasswordError(
            "Password should be 6+ characters with a special character, a number, an uppercase, and a lowercase letter."
          )
        : setPasswordError("");
      return;
    } else {
      setEmailError("");
      setPasswordError("");
    }
    setEmail("");
    setPassword("");
  };

  const isValidEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const isValidPwd = (value) => {
    const pwdPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return pwdPattern.test(value);
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
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <Form.Text className="text-danger">{emailError}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <Form.Text className="text-danger">{passwordError}</Form.Text>
              )}
            </Form.Group>

            <div className="mb-5 d-flex justify-content-between align-items-center">
              <div>
                <a href="/">Can't access your account?</a>
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
