import { PiEnvelopeSimpleBold, PiEye, PiEyeSlash, PiLockBold } from "react-icons/pi";
import { useState } from "react";

const Register = () => {
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  console.log(emailInput, passwordInput);

  return (
    <main className="h-[100vh] flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl font-bold uppercase">
        Register
      </h2>

      <div className="w-80 flex flex-col gap-4">
        <label className="p-2 flex items-center gap-2 border-b-1">
          <PiEnvelopeSimpleBold className="text-2xl" />
          <input
            type="email"
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Insert your email"
            className="w-1/1 outline-none text-lg"
          />
        </label>

        <label className="p-2 flex items-center gap-4 border-b-1">
          <div className="w-1/1 flex items-center gap-2">
            <PiLockBold className="text-2xl" />
            <input
              type={isPasswordVisible ? "text" : "password"}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Insert your password"
              className="w-1/1 outline-none text-lg"
            />
          </div>

          <button className="text-2xl cursor-pointer text-[var(--text-2)]" onClick={() => setIsPasswordVisible(x => !x)}>
            {isPasswordVisible ? <PiEye /> : <PiEyeSlash />}
          </button>
        </label>

        <p className="flex gap-2">
          Already have an account?
          <a href="/login" className="text-[var(--primary-2)]">Sign In Here</a>
        </p>
      </div>

      <button

        className="w-80 p-2 bg-[var(--primary-2)] rounded font-medium bg-[var(--primary-2)] text-[var(--background)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)]"
      >
        Create Account
      </button>
    </main>
  )
};

export default Register;