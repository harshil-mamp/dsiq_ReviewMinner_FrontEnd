import React from "react";
import { Row, Col } from "react-bootstrap";
import AuthLeft from "../auth-left";

const Verify = () => {
  return (
    <Row className="login-content">
      <Col className="login-left-part" span={12} md={6}>
        <AuthLeft />
      </Col>
      <Col
        span={12}
        md={6}
        className="login-right-part bg-gray d-flex justify-content-center align-items-center"
      >
        <div className="my-5">
          <h3 className="text-center fw-bold">Please Check Your Email</h3>
          <p className="fs-p m-3 text-center fw-normal">
            if you can't get an email please check your spam folder or follow
            this <a href="/">link</a> for manual verification and support.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Verify;
