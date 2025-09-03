import { useState } from "react";
import { PiEye, PiEyeSlash, PiLockBold, PiWarning } from "react-icons/pi";

type PasswordInputProps = {
  setPasswordInput: (val: string) => void;
  passwordError: string;
}

const PasswordInput = ({ setPasswordInput, passwordError }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <label className="p-2 flex items-center gap-4 border-b-1">
        <div className="w-1/1 flex items-center gap-2">
          <PiLockBold className="text-2xl" />
          <input
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Insert your password"
            className="w-1/1 outline-none text-lg"
          />
        </div>

        <span
          onClick={() => setIsPasswordVisible(x => !x)}
          className="text-2xl cursor-pointer text-[var(--text-2)]"
        >
          {isPasswordVisible ? <PiEye /> : <PiEyeSlash />}
        </span>
      </label>

      {
        passwordError != "" &&
        <p className="text-[var(--negative)] flex gap-2 items-center">
          <PiWarning />
          <span>
            {passwordError}
          </span>
        </p>
      }
    </div>

  )
};

export default PasswordInput;