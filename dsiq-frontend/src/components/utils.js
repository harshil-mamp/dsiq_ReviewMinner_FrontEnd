export const isValidEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

export const isValidPassword = (value) => {
  const pwdPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  return pwdPattern.test(value);
};
