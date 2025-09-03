import { useEffect, useState } from "react";
import type { Address } from "../../../types/ProfileTypes";

const useFetchAddress = () => {
  const [address, setAddress] = useState<Address | null>(null)

  useEffect(() => {
    const fetchAddress = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;

      try {
        const res = await fetch(`${serverURL}/addresss`, {
          credentials: "include"
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const { data } = await res.json();
        setAddress(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchAddress();
  }, [])

  return { address }
}

export default useFetchAddress;