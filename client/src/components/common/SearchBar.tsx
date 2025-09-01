import { useState } from "react";
import { PiMagnifyingGlass, PiX } from "react-icons/pi";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const clearSearchInput = () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = "";
      setSearchInput("");
      searchInput.focus();
    }
  }

  return (
    <div className="w-full group flex gap-2 border border-[var(--border-2)] rounded-lg overflow-hidden group-focus-within:text-[var(--text-1)]">
      <div className="group w-1/1 pl-4 py-2 gap-2 flex items-center">
        <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" type="text" id="searchInput" className="w-1/1 focus:outline-none" />
        {
          searchInput.length > 0 ? (
            <button onClick={clearSearchInput} className="cursor-pointer">
              <PiX />
            </button>
          ) : null
        }
      </div>
      <button
        className="px-3 py-auto bg-[var(--surface)] text-[var(--text-2)] text-2xl cursor-pointer transition-all group-focus-within:bg-[var(--primary-2)] group-focus-within:text-[var(--background)] hover:bg-[var(--primary-1)] hover:text-[var(--background)] active:bg-[var(--background)] active:text-[var(--text-1)]">
        <PiMagnifyingGlass />
      </button>
      
    </div>
  )
};

export default SearchBar;