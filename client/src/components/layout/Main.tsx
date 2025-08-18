import type { ReactNode } from "react";
import {  } from "react-icons/pi";

const Main = ({ children }: { children: ReactNode}) => {
  return (
    <main className="min-h-[100dvh] p-4 mt-12 flex flex-col gap-4">
      {children}
    </main>
  )
};

export default Main;