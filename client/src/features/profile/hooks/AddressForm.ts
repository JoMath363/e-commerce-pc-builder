import { useState } from "react";

type Field = {
  value: string,
  error: string
}

type AddressForm = {
  street: Field,
  number: Field,
  complement: Field,
  neighborhood: Field,
  city: Field,
  state: Field,
  postalCode: Field,
  country: Field
}

const useAddressForm = () => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    street: { value: "", error: "" },
    number: { value: "", error: "" },
    complement: { value: "", error: "" },
    neighborhood: { value: "", error: "" },
    city: { value: "", error: "" },
    state: { value: "", error: "" },
    postalCode: { value: "", error: "" },
    country: { value: "", error: "" }
  })

  const validateInputs = () => {
    let isValid = true;

    const updatedForm = { ...addressForm };

    Object.entries(addressForm).forEach(([key, input]) => {
      const val = input.value.trim();

      if (val === "") {
        updatedForm[key as keyof typeof addressForm] = {
          value: val,
          error: `${key} is required.`
        };
        isValid = false;
      } else {
        updatedForm[key as keyof typeof addressForm] = {
          value: val,
          error: ""
        };
      }
    });

    setAddressForm(updatedForm);

    return isValid;
  };

  const handleErrors = (status: number) => {
    const updatedForm = { ...addressForm };

    Object.keys(updatedForm).forEach((key) => {
      updatedForm[key as keyof typeof addressForm].error = "";
    })

    switch (status) {
      default:
        updatedForm.country.error = "Something went wrong. Please try again."
        break;
    }

    setAddressForm(updatedForm);
  }

  const handleChange = (field: keyof AddressForm, value: string) => {
    setAddressForm((prev) => ({
      ...prev,
      [field]: { value, error: "" }, // reset error on change
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serverURL = import.meta.env.VITE_SERVER_URL

    if (!validateInputs()) return;

    const adress = {
      street: addressForm.street.value,
      number: addressForm.number.value,
      complement: addressForm.complement.value,
      neighborhood: addressForm.neighborhood.value,
      city: addressForm.city.value,
      state: addressForm.state.value,
      postalCode: addressForm.postalCode.value,
      country: addressForm.country.value
    }

    const res = await fetch(`${serverURL}/addresses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adress),
      credentials: "include",
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      handleErrors(res.status);
    }
  }

  return {
    addressForm,
    handleChange,
    handleSubmit
  }

};

export default useAddressForm;