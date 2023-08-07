import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const NameInput = ({
  fvalue,
  lvalue,
  onChangeF,
  onChangeL,
  fNameError,
  lNameError,
}) => {
  return (
    <Row>
      <Col span={12} md={6}>
        <Form.Group
          className="position-relative mb-5"
          controlId="formGridFName"
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={fvalue}
            onChange={(e) => onChangeF(e.target.value)}
          />
          {fNameError && (
            <Form.Text className="text-danger form-error-msg">
              {fNameError}
            </Form.Text>
          )}
        </Form.Group>
      </Col>
      <Col span={12} md={6}>
        <Form.Group
          className="position-relative mb-5"
          controlId="formGridLName"
        >
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={lvalue}
            onChange={(e) => onChangeL(e.target.value)}
          />
          {lNameError && (
            <Form.Text className="text-danger form-error-msg">
              {lNameError}
            </Form.Text>
          )}
        </Form.Group>
      </Col>
    </Row>
  );
};

export default NameInput;
