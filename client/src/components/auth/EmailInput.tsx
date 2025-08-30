import { type Dispatch, type SetStateAction } from "react";
import { PiEnvelopeSimpleBold, PiWarning } from "react-icons/pi";

type PasswordInputProps = {
  setEmailInput: Dispatch<SetStateAction<string>>;
  emailError: string;
}

const EmailInput = ({ setEmailInput, emailError }: PasswordInputProps) => {

  return (
    <div className="flex flex-col gap-2">
      <label className="p-2 flex items-center gap-2 border-b-1">
        <PiEnvelopeSimpleBold className="text-2xl" />
        <input
          type="email"
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="Insert your email"
          className="w-1/1 outline-none text-lg"
        />
      </label>

      {
        emailError != "" &&
        <p className="text-[var(--negative)] flex gap-2 items-center">
          <PiWarning />
          <span>
            {emailError}
          </span>
        </p>
      }
    </div>

  )
};

export default EmailInput;