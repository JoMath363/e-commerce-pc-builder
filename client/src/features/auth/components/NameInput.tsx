import { PiUserBold, PiWarning } from "react-icons/pi";

type NameInputProps = {
  setNameInput: (val: string) => void;
  nameError: string;
}

const NameInput = ({ setNameInput, nameError }: NameInputProps) => {

  return (
    <div className="flex flex-col gap-2">
      <label className="p-2 flex items-center gap-2 border-b-1">
        <PiUserBold className="text-2xl" />
        <input
          type="text"
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Insert your name"
          className="w-1/1 outline-none text-lg"
        />
      </label>

      {
        nameError != "" &&
        <p className="text-[var(--negative)] flex gap-2 items-center">
          <PiWarning />
          <span>
            {nameError}
          </span>
        </p>
      }
    </div>

  )
};

export default NameInput;