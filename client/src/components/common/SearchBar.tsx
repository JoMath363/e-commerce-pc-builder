import { useRef, useState } from "react";
import { PiMagnifyingGlass, PiX } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useCatalogContext } from "../../contexts/CatalogContext";

const SearchBar = () => {
  const { search, setSearch } = useCatalogContext();
  const [searchInput, setSearchInput] = useState(search);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const clearSearchInput = () => {
    ;
    if (!searchInputRef.current) return;

    searchInputRef.current.value = "";
    setSearchInput("");
    searchInputRef.current.focus();
  }

  const submitSearch = () => {
    setSearch(searchInput);
    navigate("/catalog");
  }

  return (
    <div className="w-full flex gap-2 border border-[var(--border-2)] rounded-lg overflow-hidden">
      <div className="w-1/1 group pl-4 py-2 gap-2 flex items-center">
        <input
          ref={searchInputRef}
          value={searchInput}
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-1/1 focus:outline-none"
          placeholder="Search"
        />
        {
          searchInput.length > 0 &&
          <button
            onClick={clearSearchInput}
            className="cursor-pointer hidden group-focus-within:block"
          >
            <PiX />
          </button>
        }
      </div>
      <button
        onClick={submitSearch}
        className="px-3 py-auto bg-[var(--surface)] text-[var(--text-2)] text-2xl cursor-pointer transition-all hover:bg-[var(--secondary-1)] hover:text-[var(--background)] active:bg-[var(--background)] active:text-[var(--text-1)]">
        <PiMagnifyingGlass />
      </button>

    </div>
  )
};

export default SearchBar;