import type { ReactNode } from "react";
import {  } from "react-icons/pi";

const Main = ({ children }: { children: ReactNode}) => {
  return (
    <main className="p-4 flex flex-col gap-4">
      {children}
    </main>
  )
};

export default Main;