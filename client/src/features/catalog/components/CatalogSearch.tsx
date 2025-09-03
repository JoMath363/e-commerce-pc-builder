import {  } from "react-icons/pi";
import SearchBar from "../../../components/SearchBar";
import FilterModalOpener from "./FilterModalOpener";

const CatalogSearch = () => {
  return (
    <div className="flex gap-2">
      <SearchBar/>
      <FilterModalOpener/>
    </div>
  )
};

export default CatalogSearch;