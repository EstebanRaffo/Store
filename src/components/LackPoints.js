import React from "react";
import { Chip } from '@material-ui/core';
import Coin from "./Coin";

const LackPoints = ({ delta }) => {

    return <Chip icon={<Coin />} label={`Te faltan ${delta}`}/>
    
}

export default LackPoints;