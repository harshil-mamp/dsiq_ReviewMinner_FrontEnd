import { useState } from "react";
import { isValidEmail, isValidPassword } from "../../utils";

const useFormValidation = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    setEmail(value);

    if (!isValidEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    setPassword(value);

    if (!isValidPassword(value)) {
      setPasswordError("Invalid password format");
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return {
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    showPassword,
    togglePasswordVisibility,
  };
};

export default useFormValidation;
