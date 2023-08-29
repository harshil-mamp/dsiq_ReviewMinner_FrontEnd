import React from "react";
import { Form, Row } from "react-bootstrap";

const AddressInput = ({ value, onChange, addressError }) => {
  return (
    <Row>
      <Form.Group
        className="position-relative mb-5"
        controlId="formGridCompany"
      >
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          placeholder="Enter your address"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {addressError && (
          <Form.Text className="text-danger form-error-msg">
            {addressError}
          </Form.Text>
        )}
      </Form.Group>
    </Row>
  );
};

export default AddressInput;
