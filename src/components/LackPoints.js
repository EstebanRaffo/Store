import React from "react";
import { Chip } from '@material-ui/core';
import Coin from "./Coin";
import { withStyles } from '@material-ui/core/styles';


const NewChip = withStyles({
    root: {
        color: 'white',
        backgroundColor: '#777777'
    },
})(Chip);


const LackPoints = ({ delta }) => {

    const handleDelete = () => {
        return
    }

    return <NewChip 
                label={`Te faltan ${delta} puntos`}
                onDelete={handleDelete}
                deleteIcon={<Coin/>} 
            />
}

export default LackPoints;