import React from "react";
import FilterByName from "./FilterByName";
import FilterByPrice from "./FilterByPrice";
import FilterByCategory from "./FilterByCategory";

const Filters = () => {
  return (
    <div className="filters">
      <FilterByName/>
      <FilterByPrice/>
      <FilterByCategory/>
    </div>
  );
};

export default Filters;

