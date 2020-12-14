import React, {useContext} from "react";

import { exchange } from "../actions/actions";
import {useDispatch} from "react-redux";
import { AppContext } from "../components/ContextProvider";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Coin from "./Coin";
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '87%',
      margin: '10px',
      padding: '21px',
      backgroundColor: 'rgb(15, 173, 236, 0.05)',
      position: 'absolute',
      zIndex: '1',
      top: '78px',
      left: '8px',
      borderRadius: '10px',
    },
    font: {
        color: 'white',
        margin: '10px'
    },
    chip: {
        width: '90%',
        color: 'white',
        backgroundColor: '#777777'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
}));

const Redeem = ({productId, price}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {setCurrentId, setCurrentExchangingId} = useContext(AppContext);

    const handleClick = () => {
        dispatch(exchange(productId));
        setCurrentId("");
        setCurrentExchangingId(productId);
    };

    return(
        <Card className={classes.root}>
            <Typography variant="h3" align="center" className={classes.font}>
                {price} 
                <Coin />
            </Typography>
            <Chip 
                className={classes.chip}
                label="Canjear Ahora" 
                onClick={handleClick}
                clickable 
            />
        </Card>
    )
}

export default Redeem;