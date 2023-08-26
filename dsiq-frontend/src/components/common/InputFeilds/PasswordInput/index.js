import React from "react";
import { Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

const PasswordInput = ({
  value,
  onChange,
  showPassword,
  togglePassword,
  passwordError,
}) => {
  const tooltip = (
    <Tooltip className="font-xs" id="tooltip">
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
          placeholder="Enter password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div
          className="pwd-feild-eye"
          style={{ cursor: "pointer", zIndex: 100 }}
          onClick={togglePassword}
        >
          {showPassword ? (
            <i class="fa-regular fa-eye-slash" style={{ color: "#3f4b55" }}></i>
          ) : (
            <i class="fa-regular fa-eye" style={{ color: "#3f4b55" }}></i>
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

export default PasswordInput;
