import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const NameInput = ({ value, onChange, fnameError, lnameError }) => {
  return (
    <Row>
      <Col>
        <Form.Group
          className="position-relative mb-5"
          controlId="formGridFName"
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {fnameError && (
            <Form.Text className="text-danger form-error-msg">
              {fnameError}
            </Form.Text>
          )}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group
          className="position-relative mb-5"
          controlId="formGridLName"
        >
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {lnameError && (
            <Form.Text className="text-danger form-error-msg">
              {lnameError}
            </Form.Text>
          )}
        </Form.Group>
      </Col>
    </Row>
  );
};

export default NameInput;
