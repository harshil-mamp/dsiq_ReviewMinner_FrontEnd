import React from "react";
import { Button } from "react-bootstrap";
import ErrorImg from "../../assets/img/error.jpg";

const ErrorPage = () => {
  return (
    <div className="vh-100 position-relative d-flex justify-content-center align-items-center">
      <img className="vh-100" src={ErrorImg} alt="ErrorImg" />
      <Button
        style={{ top: 100 }}
        className="position-absolute"
        href="/"
        variant="primary"
      >
        Back
      </Button>
    </div>
  );
};

export default ErrorPage;
