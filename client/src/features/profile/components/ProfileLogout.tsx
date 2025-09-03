import { PiSignOutBold } from "react-icons/pi";
import ModalOpener from "../../../components/ModalOpener";

const ProfileLogout = () => {
  const handleLogout = async () => {
    const serverUrl = import.meta.env.VITE_SERVER_URL

    await fetch(`${serverUrl}/auth/logout`, {
      method: "POST",
      credentials: "include"
    })

    window.location.href = "/";
  }

  return (
    <ModalOpener
      action={handleLogout}
      actionText="LogOut"
      opener={(open: () => void) =>
        <div
          className="mx-auto w-fit px-8 py-2 flex justify-start items-center gap-3 p-3 rounded-lg text-[var(--negative)] border hover:bg-[var(--surface)] active:bg-[var(--background)] active:text-[var(--text-1)]"
          onClick={open}
        >
          <PiSignOutBold className="text-xl" />
          <span className="font-medium">LogOut</span>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg text-center">
          Are you sure you want to log out?
        </h2>
      </div>
    </ModalOpener>
  )
};

export default ProfileLogout;