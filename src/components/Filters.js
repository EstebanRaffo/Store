import React from "react";
import FilterByName from "./FilterByName";
import FilterByPrice from "./FilterByPrice";
import FilterByCategory from "./FilterByCategory";
import Sorter from "./Sorter";

const Filters = () => {
  return (
    <div className="filters">
      <FilterByName/>
      <FilterByPrice/>
      <FilterByCategory/>
      <Sorter/>
    </div>
  );
};

export default Filters;

