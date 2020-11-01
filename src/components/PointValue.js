import React from "react";


const PointValue = ({point, checked, syncup}) => {

    const handleChange = ({target: { value }}) => {
        syncup(true, +value)
    }

    return(
        <div>
            <input
                className="largerCheckbox"
                type="checkbox"
                onChange={handleChange}
                checked={checked}
                value={point}
                />
            <label>{point}</label>
        </div>
    )
}

export default PointValue;