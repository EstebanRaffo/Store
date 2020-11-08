import React, {useState, useContext} from "react";
import { AppContext } from "./ContextProvider";


const FilterByName = () => {
    const {searchTerm, setSearchTerm} = useContext(AppContext);

    const handleChange = ({target: {value}}) => {
        setSearchTerm(value);
    };

    return (
      <div>
        <label>Producto</label>
        <input
            className="Items-searchTerm"
            value={searchTerm}
            onChange={handleChange}
        />
      </div>
    );
};
  
export default FilterByName;