import type { ReactNode } from "react";
import {  } from "react-icons/pi";

const Center = (props: { children: ReactNode}) => {
  return (
    <main className="h-[100vh] flex justify-center items-center">
      { props.children }
    </main>
  )
};

export default Center;