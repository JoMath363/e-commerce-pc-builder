import { useState, useEffect } from "react";

const useCheckAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${serverURL}/auth/logged`, {
        credentials: "include",
      });

      setIsLogged(res.ok);
    };

    checkAuth();
  }, []);

  return isLogged;
};

export default useCheckAuth;