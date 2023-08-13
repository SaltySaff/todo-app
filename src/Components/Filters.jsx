import { useContext } from "react";
import { AppContext } from "./App"
import Filter from "./Filter";

export default function Filters() {
  const { selectedFilter, setSelectedFilter} = useContext(AppContext)
  const changeSelected = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <section className="flex gap-4 justify-center text-sm font-bold text-dark-grayish-blue bg-very-dark-desaturated-blue mt-4 pt-4 pb-3 rounded-md">
      <Filter
        changeSelected={changeSelected}
        selected={selectedFilter === "All"}
      >
        All
      </Filter>
      <Filter
        changeSelected={changeSelected}
        selected={selectedFilter === "Active"}
      >
        Active
      </Filter>
      <Filter
        changeSelected={changeSelected}
        selected={selectedFilter === "Completed"}
      >
        Completed
      </Filter>
    </section>
  );
}
