import { useState } from "react";
import { capitalize } from "../../../utils/helper";

type Field = { value: string; error: string };

type LoginForm = {
  email: Field;
  password: Field;
};

const useLoginForm = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  })

  const validateInputs = () => {
    let isValid = true;

    const updatedForm = { ...loginForm };

    Object.entries(loginForm).forEach(([key, input]) => {
      const val = input.value.trim();

      if (val === "") {
        updatedForm[key as keyof typeof loginForm] = {
          value: val,
          error: `${capitalize(key)} is required.`
        };
        isValid = false;
      } else {
        updatedForm[key as keyof typeof loginForm] = {
          value: val,
          error: ""
        };
      }
    });

    setLoginForm(updatedForm);

    return isValid;
  };

  const handleErrors = (status: number) => {
    const updatedForm = { ...loginForm };

    Object.keys(updatedForm).forEach((key) => {
      updatedForm[key as keyof typeof loginForm].error = "";
    })

    switch (status) {
      case (404):
        updatedForm.email.error = "No account found with this email."
        break;
      case (401):
        updatedForm.password.error = "Incorrect password."
        break;
      default:
        updatedForm.password.error = "Something went wrong. Please try again."
        break;
    }

    setLoginForm(updatedForm);
  }

  const handleChange = (field: keyof LoginForm, value: string) => {
    setLoginForm((prev) => ({
      ...prev,
      [field]: { value, error: "" }, // reset error on change
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serverURL = import.meta.env.VITE_SERVER_URL

    if (!validateInputs()) return;

    const user = {
      email: loginForm.email.value,
      password: loginForm.password.value
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
    loginForm,
    handleChange,
    handleSubmit
  }

};

export default useLoginForm;