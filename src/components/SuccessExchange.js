import React, {useContext, useEffect} from "react";
import { getUser } from "../actions/actions";

import { AppContext } from "../components/ContextProvider";
import SuccessIcon from "./SuccessIcon";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px',
      backgroundColor: 'rgb(0, 190, 90)'
    },
    media: {
      margin: '5%'
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
    },
}));

const SuccessExchange = () => {
    const classes = useStyles();
    const {setCurrentExchangingId} = useContext(AppContext);

    useEffect(() => {
      getUser();
    })

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media}>
                <Typography variant="h4" align="center"> 
                    <SuccessIcon />
                </Typography>
                <Chip
                  className={classes.chip}
                  label="Canjear nuevamente" 
                  onClick={() => setCurrentExchangingId("")}
                  clickable 
                />
            </CardMedia>
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="h6">
                    Canje Exitoso ! 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SuccessExchange;