import { useState } from "react";

const useLoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = () => {
    let isValid = true;

    if (emailInput.trim() == "") {
      setEmailError("Email is required.");
      isValid = false
    } else {
      setEmailError("");
    }

    if (passwordInput.trim() == "") {
      setPasswordError("Password is required.")
      isValid = false
    } else {
      setPasswordError("");
    }

    return isValid;
  }

  const handleErrors = (status: number) => {
    setEmailError("");
    setPasswordError("");

    switch (status) {
      case (404):
        setEmailError("No account found with this email.");
        break;
      case (401):
        setPasswordError("Incorrect password.");
        break;
      default:
        setPasswordError("Something went wrong. Please try again.");
        break;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serverURL = import.meta.env.VITE_SERVER_URL

    if (!validateInputs()) return;

    const user = {
      email: emailInput,
      password: passwordInput
    }

    const res = await fetch(`${serverURL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      credentials: "include",
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      handleErrors(res.status);
    }
  }

  return {
    emailInput,
    setEmailInput,
    passwordInput,
    setPasswordInput,
    emailError,
    passwordError,
    handleSubmit
  }

};

export default useLoginForm;