import React from "react";
import { Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

const ConfirmPasswordInput = ({
  value,
  onChange,
  showPassword,
  togglePassword,
  passwordError,
}) => {
  const tooltip = <Tooltip id="tooltip">Password must be match</Tooltip>;
  return (
    <Form.Group
      className="position-relative mb-5"
      controlId="formGridConfirmPassword"
    >
      <Form.Label>Confirm Password</Form.Label>
      <InputGroup>
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div
          className="pwd-feild-eye"
          style={{ cursor: "pointer", zIndex: 100 }}
          onClick={togglePassword}
        >
          {showPassword ? (
            <i
              className="fa-regular fa-eye-slash"
              style={{ color: "#3f4b55" }}
            ></i>
          ) : (
            <i className="fa-regular fa-eye" style={{ color: "#3f4b55" }}></i>
          )}
        </div>
        <InputGroup.Text>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <i
              className="cursor-pointer fa-solid fa-circle-info"
              style={{ color: "#3f4b55" }}
            ></i>
          </OverlayTrigger>
        </InputGroup.Text>
      </InputGroup>
      {passwordError && (
        <Form.Text className="text-danger form-error-msg">
          {passwordError}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default ConfirmPasswordInput;
