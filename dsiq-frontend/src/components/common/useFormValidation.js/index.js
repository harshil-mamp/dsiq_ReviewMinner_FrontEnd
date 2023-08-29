import { useState } from "react";
import { isValidEmail, isValidPassword } from "../../utils";

const useFormValidation = () => {
  const [fname, setFName] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lname, setLName] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

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

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateFName = (value) => {
    setFName(value);
    if (!value.trim()) {
      setFNameError("First name is required");
    } else {
      setFNameError("");
    }
  };

  const validateLName = (value) => {
    setLName(value);
    if (!value.trim()) {
      setLNameError("Last name is required");
    } else {
      setLNameError("");
    }
  };

  const validateCompany = (value) => {
    setCompany(value);
    if (!value.trim()) {
      setCompanyError("Company is required");
    } else {
      setCompanyError("");
    }
  };

  const validateAddress = (value) => {
    setAddress(value);
    if (!value.trim()) {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
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
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
    fname,
    setFName,
    fNameError,
    validateFName,
    lname,
    setLName,
    lNameError,
    validateLName,
    company,
    setCompany,
    companyError,
    validateCompany,
    address,
    setAddress,
    addressError,
    validateAddress,
  };
};

export default useFormValidation;
