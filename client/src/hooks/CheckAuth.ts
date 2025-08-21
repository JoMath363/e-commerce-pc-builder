import { useState, useEffect } from "react";

const useCheckAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${serverURL}/profile/logged`, {
          credentials: "include",
        });

        setIsLogged(res.ok);
      } catch (err) {
        console.log(err);
        setIsLogged(false);
      }
    };

    checkAuth();
  }, []);

  return isLogged;
};

export default useCheckAuth;