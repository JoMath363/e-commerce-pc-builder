import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import useRegister from "../../hooks/Register";
import NameInput from "./NameInput";

const RegisterForm = () => {

  const {
    setNameInput,
    nameError,
    setEmailInput,
    emailError,
    setPasswordInput,
    passwordError,
    handleSubmit
  } = useRegister();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <h2 className="text-2xl font-bold uppercase text-center">
        Sign In
      </h2>

      <div className="w-80 flex flex-col gap-4">
        <NameInput
          setNameInput={setNameInput}
          nameError={nameError}
        />
        <EmailInput
          setEmailInput={setEmailInput}
          emailError={emailError}
        />
        <PasswordInput
          setPasswordInput={setPasswordInput}
          passwordError={passwordError}
        />

        <p className="flex gap-2">
          Already have an account?
          <a href="/login" className="text-[var(--primary-2)]">Login Here</a>
        </p>
      </div>

      <button
        className="w-80 p-2 bg-[var(--primary-2)] rounded font-medium bg-[var(--primary-2)] text-[var(--background)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)]"
      >
        Register
      </button>
    </form>
  )
};

export default RegisterForm;