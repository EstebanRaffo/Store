import React from "react";
import { Chip } from '@material-ui/core';
import Coin from "./Coin";

const LackPoints = ({ delta }) => {

    return <Chip 
                label={`Te faltan ${delta}`}
                icon={<Coin />} 
            />
    
}

export default LackPoints;