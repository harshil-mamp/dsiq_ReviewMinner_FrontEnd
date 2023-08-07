import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import RegisterImg from "../../../assets/img/register.svg";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col span={12} md={6}>
          <img className="vh-100" src={RegisterImg} alt="Register" />
        </Col>
        <Col
          span={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h3 className="text-center fw-bold">Create Your Account</h3>
            <Form className="w-100" onSubmit={handleSubmit}></Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
