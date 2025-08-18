import { PiCpuBold, PiShoppingCart, PiUser } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-100 w-full p-4 flex justify-between h-12 bg-[var(--primary-2)]">
      <a href="/" className="flex items-center justify-center gap-1 text-[var(--background)] text-xl">
        <PiCpuBold />
        <p>PC Builder</p>
      </a>

      <div className="flex items-center justify-center gap-2">
        <Link
          to="/cart"
          className="p-1.5 text-[var(--background)] text-2xl rounded cursor-pointer transition-all hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)]"
        >
          <PiShoppingCart />
        </Link>

        <Link
          to="/profile"
          className="p-1.5 text-[var(--background)] text-2xl rounded cursor-pointer transition-all hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)]">
          <PiUser />
        </Link>
      </div>
    </nav>
  )
};

export default NavBar;