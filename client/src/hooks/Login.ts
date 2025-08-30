import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serverURL = import.meta.env.VITE_SERVER_URL

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
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return {
    setEmailInput,
    setPasswordInput,
    emailError,
    passwordError,
    handleSubmit
  }

};

export default useLogin;