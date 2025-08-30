import { useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import Modal from "../ui/Modal";
import { useNavigate } from "react-router-dom";

const ProfileLogout = () => {
  const [openLogOut, setOpenLogOut] = useState(false);
  const navigate = useNavigate()

  const handleLogout = async () => {
    const serverUrl = import.meta.env.VITE_SERVER_URL

    await fetch(`${serverUrl}/auth/logout`, {
      method: "POST",
      credentials: "include"
    })

    setOpenLogOut(false);
    navigate("/");
  }

  return (
    <>
      <Modal isOpen={openLogOut} >
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-center">
            Are you sure you want to log out?
          </h2>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setOpenLogOut(false)}
              className="px-4 py-2 flex items-center gap-2 bg-[var(--surface)] text-[var(--text-1)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)"
            >
              Cancel
            </button>
            <button
              onClick={() => handleLogout()}
              className="px-4 py-2 flex items-center gap-2 bg-[var(--negative)] text-[var(--background)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)"
            >
              LogOut
            </button>
          </div>
        </div>
      </Modal>

      <div
        onClick={() => setOpenLogOut(true)}
        className="flex items-center gap-3 p-3 bg-[var(--surface)] rounded-xl text-[var(--negative)]"
      >
        <PiSignOutBold className="text-xl" />
        <span className="font-medium">LogOut</span>
      </div>
    </>
  )
};

export default ProfileLogout;