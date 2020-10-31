import React, { useState, useContext } from "react";
import { AppContext } from "./ContextProvider";


const PointValue = ({point, selected, syncup}) => {
    // const [selected, setSelected] = useState(initial);
    // const {pointsSelected, setPoints} = useContext(AppContext);

    const handleClick = ({target: { value }}) => {
        syncup(true, value)
    }

    return(
        <div>
            <button type="button" className={selected ? "btn btn-success" : "btn"} onClick={handleClick} value={point}>{point}</button>
        </div>
    )
}

export default PointValue;