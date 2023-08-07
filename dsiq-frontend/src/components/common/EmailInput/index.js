import React from "react";
import { Form } from "react-bootstrap";

const EmailInput = ({ value, onChange, emailError }) => {
  return (
    <Form.Group className="position-relative mb-5" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {emailError && (
        <Form.Text className="text-danger form-error-msg">
          {emailError}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default EmailInput;
