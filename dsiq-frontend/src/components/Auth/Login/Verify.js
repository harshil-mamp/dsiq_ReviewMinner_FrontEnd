import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VerifyImg from "../../../assets/img/verify.svg";

const Verify = () => {
  return (
    <Container>
      <Row>
        <Col span={12} md={6}>
          <img className="vh-100" src={VerifyImg} alt="Verify Image" />
        </Col>
        <Col
          span={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5">
            <h3 className="text-center fw-bold">Please Check Your Email</h3>
            <p className="fs-p my-3 text-center fw-normal">
              if you can't get an email please check your spam folder or follow
              this <a href="/">link</a> for manual verification and support.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Verify;
