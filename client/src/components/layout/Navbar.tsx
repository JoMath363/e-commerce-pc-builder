import { PiCpuBold, PiShoppingCart, PiUser } from "react-icons/pi";
import { PrimaryButton } from "../Buttons";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-100 w-full p-4 flex justify-between h-12 bg-[var(--primary)]">
      <a href="/" className="flex items-center justify-center gap-1 text-[var(--accent)] text-xl">
        <PiCpuBold />
        <p>PC Builder</p>
      </a>

      <div className="flex items-center justify-center gap-2">
        <PrimaryButton
          href="/cart"
          className="p-1.5 text-2xl rounded"
          iconLeft={<PiShoppingCart />}
        />
          
        <PrimaryButton
          href="/profile"
          className="p-1.5 text-2xl rounded"
          iconLeft={<PiUser />}
        />
      </div>
    </nav>
  )
};

export default NavBar;