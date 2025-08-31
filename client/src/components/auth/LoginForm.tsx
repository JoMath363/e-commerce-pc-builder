import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import useLogin from "../../hooks/Login";

const LoginForm = () => {
  const {
    setEmailInput,
    setPasswordInput,
    emailError,
    passwordError,
    handleSubmit
  } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <h2 className="text-2xl font-bold uppercase text-center">
        Sign In
      </h2>

      <div className="w-80 flex flex-col gap-4">
        <EmailInput
          setEmailInput={setEmailInput}
          emailError={emailError}
        />
        <PasswordInput
          setPasswordInput={setPasswordInput}
          passwordError={passwordError}
        />

        <p className="flex gap-2">
          Don't have an account?
          <a href="/register" className="text-[var(--primary-2)]">Register Here</a>
        </p>
      </div>

      <button
        className="w-80 p-2 bg-[var(--primary-2)] rounded font-medium bg-[var(--primary-2)] text-[var(--background)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)]"
      >
        Login
      </button>
    </form>
  )
};

export default LoginForm;