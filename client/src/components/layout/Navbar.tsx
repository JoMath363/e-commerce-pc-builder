import { PiCpuBold, PiShoppingCart, PiUser } from "react-icons/pi";

const NavBar = () => {
  return (
    <nav className="p-4 flex justify-between h-12 bg-[var(--primary-2)]">
      <a href="/" className="flex items-center justify-center gap-1 text-[var(--background)] text-xl">
        <PiCpuBold />
        <p>PC Builder</p>
      </a>

      <div className="flex items-center justify-center gap-2">
        <button className="p-1.5 text-[var(--background)] text-2xl rounded cursor-pointer transition-all hover:bg-[var(--primary-1)] active:bg-[var(--background)] active:text-[var(--text-1)]">
          <PiShoppingCart />
        </button>

        <button className="p-1.5 text-[var(--background)] text-2xl rounded cursor-pointer transition-all hover:bg-[var(--primary-1)] active:bg-[var(--background)] active:text-[var(--text-1)]">
          <PiUser />
        </button>
      </div>
    </nav>
  )
};

export default NavBar;