import React, {useContext} from "react";
import FilterByName from "./FilterByName";
import FilterByPrice from "./FilterByPrice";
import FilterByCategory from "./FilterByCategory";
import FilterByDate from "./FilterByDate";
import Sorter from "./Sorter";
import { AppContext } from "../components/ContextProvider";


const Filters = () => {
  const {historyQuery} = useContext(AppContext);
  
  return (
    <>
      <div className="filters">
        <FilterByName/>
        <FilterByCategory/>
        <FilterByPrice/>
        <Sorter/>
      </div>
      <div className="date-filters">
        { historyQuery ? <FilterByDate /> : "" }
      </div>
    </>
  );
};

export default Filters;

