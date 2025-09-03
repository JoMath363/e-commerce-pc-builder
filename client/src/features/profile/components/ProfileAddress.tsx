import { PiMapPin } from "react-icons/pi";
import useFetchAddress from "../hooks/FetchAddress";

const ProfileAdress = () => {
  const { address } = useFetchAddress();

  return (
    <section className="flex flex-col gap-3 mb-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Adress</h2>

        
      </div>

      {
        address ? (
          <div className="p-3 bg-[var(--surface)] flex items-center gap-4 rounded-xl">
            <span className="bg-[var(--primary)] p-2 rounded-lg">
              <PiMapPin className="text-2xl text-[var(--accent)]" />
            </span>
            <div>
              <h2>{address.street}, {address.number}, {address.complement} - {address.neighborhood}</h2>
              <h2>{address.city} - {address.state}, {address.postalCode}, {address.country}</h2>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-[var(--surface)] text-[var(--text-2)] rounded-xl text-center">
            <h2>No address is currently set for your account.</h2>
          </div>
        )
      }

    </section>
  )
};

export default ProfileAdress;