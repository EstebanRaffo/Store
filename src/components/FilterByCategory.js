import React, {useState} from "react";

const FilterByCategory = () => {
    const [filterCategory, setFilterCategory] = useState();

    const handleChange = ({target: {value}}) => {
        setFilterCategory(value);
    };

    return (
      <div>
        <label>Categoria</label>
        <input
            className="Items-searchTerm"
            value={filterCategory}
            onChange={handleChange}
        />
      </div>
    );
};
  
  export default FilterByCategory;