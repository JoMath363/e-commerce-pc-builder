import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import useLoginForm from "../hooks/LoginForm";

const LoginForm = () => {
  const { loginForm, handleChange, handleSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <h2 className="text-2xl font-bold uppercase text-center">
        Sign In
      </h2>

      <div className="w-80 flex flex-col gap-4">
        <EmailInput
          setEmailInput={(val) => handleChange("email", val)}
          emailError={loginForm.email.error}
        />
        <PasswordInput
          setPasswordInput={(val) => handleChange("password", val)}
          passwordError={loginForm.password.error}
        />

        <p className="flex gap-2">
          Don't have an account?
          <a href="/register" className="text-[var(--primary)]">Register Here</a>
        </p>
      </div>

      <button
        className="w-80 p-2 bg-[var(--primary)] rounded font-medium bg-[var(--primary)] text-[var(--accent)] rounded hover:bg-[var(--primary)] active:bg-[var(--secondary)]"
      >
        Login
      </button>
    </form>
  )
};

export default LoginForm;