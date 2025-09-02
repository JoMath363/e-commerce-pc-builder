import { useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import Modal from "../common/Modal";

const ProfileLogout = () => {
  const [openLogOut, setOpenLogOut] = useState(false);

  const handleLogout = async () => {
    const serverUrl = import.meta.env.VITE_SERVER_URL

    await fetch(`${serverUrl}/auth/logout`, {
      method: "POST",
      credentials: "include"
    })

    setOpenLogOut(false);
    window.location.href = "/";
  }

  return (
    <>
      <Modal isOpen={openLogOut} >
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-center">
            Are you sure you want to log out?
          </h2>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setOpenLogOut(false)}
              className="py-2 px-5 bg-[var(--surface)] rounded text-[var(--text-1)] font-medium hover:bg-[var(--text-2)] hover:text-[var(--background)] active:bg-[var(--background)] active:text-[var(--text-1)] active:border-[var(--text-1)]"
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