import React, {useContext} from "react";
import { AppContext } from "./ContextProvider";
// import lupa from "../images/lupa.png";


const FilterByName = () => {
    const {searchTerm, setSearchTerm} = useContext(AppContext);

    const handleChange = ({target: {value}}) => {
        setSearchTerm(value);
    };

    return (
      // <div className="input-container">
      //   <input
      //     type="text"
      //     // className="form-control"
      //     placeholder="Buscar"
      //     // aria-label=""
      //     // aria-describedby="basic-addon1"
      //     value={searchTerm}
      //     onChange={handleChange}
      //   />
      //   <img className="lupa" height="14px" src={lupa} alt="" />
      // </div>
      <div>
        <input
            className="Items-searchTerm"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Buscar"
        />
      </div>
    );
};
  
export default FilterByName;