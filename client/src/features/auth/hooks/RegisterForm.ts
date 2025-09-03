import { useState } from "react";
import { capitalize } from "../../../utils/helper";

type Field = { value: string; error: string };

type RegisterForm = {
  name: Field;
  email: Field;
  password: Field;
};

const useRegisterForm = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  })

  const validateInputs = () => {
    let isValid = true;

    const updatedForm = { ...registerForm };

    Object.entries(registerForm).forEach(([key, input]) => {
      const val = input.value.trim();

      if (val === "") {
        updatedForm[key as keyof typeof registerForm] = {
          value: val,
          error: `${capitalize(key)} is required.`
        };
        isValid = false;
      } else {
        updatedForm[key as keyof typeof registerForm] = {
          value: val,
          error: ""
        };
      }
    });

    setRegisterForm(updatedForm);

    return isValid;
  };

  const handleErrors = (status: number) => {
    const updatedForm = { ...registerForm };

    Object.keys(updatedForm).forEach((key) => {
      updatedForm[key as keyof typeof registerForm].error = "";
    })

    switch (status) {
      case (409):
        updatedForm.email.error = "Email already in use."
        break;
      default:
        updatedForm.password.error = "Something went wrong. Please try again."
        break;
    }

    setRegisterForm(updatedForm);
  }

  const handleChange = (field: keyof RegisterForm, value: string) => {
    setRegisterForm((prev) => ({
      ...prev,
      [field]: { value, error: "" }, // reset error on change
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serverURL = import.meta.env.VITE_SERVER_URL

    if (!validateInputs()) return;

    const user = {
      name: registerForm.name.value,
      email: registerForm.email.value,
      password: registerForm.password.value
    }

    const res = await fetch(`${serverURL}/auth/register`, {
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
    registerForm,
    handleChange,
    handleSubmit
  }

};

export default useRegisterForm;