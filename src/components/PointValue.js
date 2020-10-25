import React, { useState, useContext } from "react";
import { AppContext } from "./ContextProvider";


const PointValue = ({point, initial}) => {
    const [selected, setSelected] = useState(initial);
    const {pointsSelected, setPoints} = useContext(AppContext);

    const handleClick = () => {
        setSelected(true);
        setPoints(point);
    }

    return(
        <div className={selected ? "score selected" : "score"} onClick={handleClick}>
              <h4>{point}</h4>
        </div>
    )
}

export default PointValue;