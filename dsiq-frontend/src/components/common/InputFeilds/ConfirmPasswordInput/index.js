import React from "react";
import { Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Eye, EyeSlash, InfoCircle } from "react-bootstrap-icons";

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
          style={{ cursor: "pointer" }}
          onClick={togglePassword}
        >
          {showPassword ? (
            <EyeSlash color="#3f4b55" />
          ) : (
            <Eye color="#3f4b55" />
          )}
        </div>
        <InputGroup.Text>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <InfoCircle cursor="pointer" color="#3f4b55" />
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
