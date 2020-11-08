import React, {useState} from "react";

const FilterByPrice = () => {
    const [filterPrice, setFilterPrice] = useState();

    const handleChange = ({target: {value}}) => {
        setFilterPrice(value);
    };

    return (
      <div>
        <label>Precio</label>
        <input
            className="Items-searchTerm"
            value={filterPrice}
            onChange={handleChange}
        />
      </div>
    );
};
  
  export default FilterByPrice;