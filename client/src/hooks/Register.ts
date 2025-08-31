import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [nameInput, setNameInput] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (nameInput.trim() == "") {
      setNameError("Name is required.");
      isValid = false
    } else {
      setNameError("");
    }

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
    setNameError("");
    setEmailError("");
    setPasswordError("");

    switch (status) {
      case (409):
        setEmailError("Email already in use.");
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
      name: nameInput,
      email: emailInput,
      password: passwordInput
    }

    const res = await fetch(`${serverURL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      credentials: "include",
    });

    if (res.ok) {
      navigate("/login");
    } else {
      handleErrors(res.status);
    }
  }

  return {
    setNameInput,
    nameError,
    setEmailInput,
    emailError,
    setPasswordInput,
    passwordError,
    handleSubmit
  }

};

export default useRegister;