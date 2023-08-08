import React from "react";
import { Form, Row } from "react-bootstrap";

const CompanyInput = ({ value, onChange, companyError }) => {
  return (
    <Row>
      <Form.Group
        className="position-relative mb-5"
        controlId="formGridCompany"
      >
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your company name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {companyError && (
          <Form.Text className="text-danger form-error-msg">
            {companyError}
          </Form.Text>
        )}
      </Form.Group>
    </Row>
  );
};

export default CompanyInput;
