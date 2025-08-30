import { PiUser } from "react-icons/pi";
import { useRouteLoaderData } from "react-router-dom";

const ProfileInfo = () => {
  const { user } = useRouteLoaderData("protected_root");

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-3 p-3 bg-[var(--surface)] rounded-xl">
        <span className="p-2 border border-[var(--text-1)] rounded-full">
          <PiUser className="text-2xl" />
        </span>

        <div>
          <h2 className="text-lg font-medium">
            {user.name}
          </h2>
          <h3 className="text-[var(--text-2)]">
            {user.email}
          </h3>
        </div>
      </div>
    </section>
  )
};

export default ProfileInfo;