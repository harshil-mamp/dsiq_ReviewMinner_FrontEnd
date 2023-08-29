import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import BG from "../../../../../assets/img/privacy.jpg";
import Heading from "../../heading";
import PasswordInput from "../../../../common/InputFeilds/PasswordInput";
import ConfirmPasswordInput from "../../../../common/InputFeilds/ConfirmPasswordInput";
import useFormValidation from "../../../../common/useFormValidation.js";
import PrimaryBtn from "../../../../common/Buttons/PrimaryBtn";

const Privacy = () => {
  const {
    password,
    setPassword,
    validatePassword,
    passwordError,
    showPassword,
    togglePasswordVisibility,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  } = useFormValidation();
  return (
    <div>
      <Heading image={BG} heading={"Privacy"} />
      <div className="m-3">
        <div className="shadow-container">
          <div className="p-2 p-sm-3 d-flex justify-content-between align-items-center">
            <h3 className="font-md font-primary font-weight-700 letter-spacing-2">
              Change your Password
            </h3>
          </div>
          <div className="p-2 p-sm-3">
            <Row>
              <Col span={12} md={6}>
                <Form>
                  <Row>
                    <PasswordInput
                      value={password}
                      onChange={validatePassword}
                      showPassword={showPassword}
                      togglePassword={togglePasswordVisibility}
                      passwordError={passwordError}
                      label="Current Password"
                    />
                  </Row>
                  <Row>
                    <ConfirmPasswordInput
                      value={confirmPassword}
                      onChange={validateConfirmPassword}
                      showPassword={showConfirmPassword}
                      togglePassword={toggleConfirmPasswordVisibility}
                      passwordError={confirmPasswordError}
                    />
                  </Row>
                  <Row>
                    <PasswordInput
                      value={password}
                      onChange={validatePassword}
                      showPassword={showPassword}
                      togglePassword={togglePasswordVisibility}
                      passwordError={passwordError}
                      label="New Password"
                    />
                  </Row>
                  <PrimaryBtn text={"Submit"} />
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
