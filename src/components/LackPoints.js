import React from "react";
import { Chip, Avatar } from '@material-ui/core';
import Coin from "./Coin";

const LackPoints = ({ delta }) => {

    return <Chip 
                avatar={
                    <Avatar>
                        <Coin />
                    </Avatar>
                } 
                label={`Te faltan ${delta}`}
            />
    
}

export default LackPoints;