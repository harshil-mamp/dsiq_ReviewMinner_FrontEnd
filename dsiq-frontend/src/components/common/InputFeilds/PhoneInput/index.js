import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { MaskedTextBox } from "@progress/kendo-react-inputs";

const PhoneInput = ({ valuef, onChange, phoneError }) => {
  const [value, setValue] = useState("(091) 9884-999-211");
  const [valid, setValid] = useState(true);
  let timeout;
  const handleChange = (event) => {
    if (value === event.target.value) {
      updateValidity(event);
    } else {
      setValue(event.target.value);
    }
  };
  const updateValidity = (event) => {
    const textbox = event.target;
    if (textbox.element.value.length > textbox.value.length) {
      if (valid) {
        setValid(false);
      } else {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setValid(true);
      }, 100);
    }
  };
  return (
    <Row>
      <div className="mb-5">
        <p>Phone</p>
        <MaskedTextBox
          value={value}
          onChange={handleChange}
          mask="(999) 000-00-00-00"
          valid={valid}
        />
      </div>
      {/* <Form.Group
        className="position-relative mb-5"
        controlId="formGridCompany"
      >
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Phone"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {phoneError && (
          <Form.Text className="text-danger form-error-msg">
            {phoneError}
          </Form.Text>
        )}
      </Form.Group> */}
    </Row>
  );
};

export default PhoneInput;
