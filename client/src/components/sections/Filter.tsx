import { } from "react-icons/pi";
import DropSection from "../ui/DropSection";
import { unslug } from "../../utils/helper";
import { categories } from "../../utils/mock.json"

const Filter = () => {


  return (
    <DropSection title="Filter">
      <div className="p-4 flex flex-col gap-4">

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md">
              <input type="checkbox" className="h-5 w-5" id="" />
              <span>All</span>
            </div>
            {
              categories.map(item =>
                <div className="px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md">
                  <input type="checkbox" className="h-5 w-5" id="" />
                  <span>{unslug(item.name)}</span>
                </div>
              )
            }
          </div>

        </div>

        {<div className="flex flex-col gap-2">
          <h3 className="font-medium">Price</h3>

        </div>}
      </div>
    </DropSection>
  )
};

export default Filter;