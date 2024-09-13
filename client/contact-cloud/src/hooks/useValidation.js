import React, { useState } from "react";

const useValidation = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailValidation = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const passwordValidation = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{1,12}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain max 12 characters, 1 uppercase, 1 lowercase, 1 special character"
      );
    } else {
      setPasswordError("");
    }
  };

  return { emailError, passwordError, passwordValidation, emailValidation };
};

export default useValidation;
