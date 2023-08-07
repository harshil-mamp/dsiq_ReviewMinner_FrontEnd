import React from "react";
import { Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Eye, EyeSlash, InfoCircle } from "react-bootstrap-icons";

const PasswordInput = ({
  value,
  onChange,
  showPassword,
  togglePassword,
  passwordError,
}) => {
  const tooltip = (
    <Tooltip id="tooltip">
      Password should be at least 6 characters long with a special character, a
      number, an uppercase, and a lowercase letter.
    </Tooltip>
  );

  return (
    <Form.Group className="position-relative mb-5" controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <InputGroup>
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div
          className="pwd-feild-eye"
          style={{ cursor: "pointer" }}
          onClick={togglePassword}
        >
          {showPassword ? <EyeSlash /> : <Eye />}
        </div>
        <InputGroup.Text>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <InfoCircle cursor="pointer" color="#1677ff" />
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

export default PasswordInput;
