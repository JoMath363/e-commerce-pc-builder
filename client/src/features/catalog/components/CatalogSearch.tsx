import {  } from "react-icons/pi";
import SearchBar from "../../../components/SearchBar";
import CatalogFilter from "./CatalogFilter";

const CatalogSearch = () => {
  return (
    <div className="flex gap-2">
      <SearchBar/>
      <CatalogFilter/>
    </div>
  )
};

export default CatalogSearch;