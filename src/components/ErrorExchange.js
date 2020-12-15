import React, {useEffect, useContext} from "react";
import { getUser } from "../actions/actions";
import { AppContext } from "../components/ContextProvider";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, Divider, Chip } from '@material-ui/core';

import ErrorIcon from '@material-ui/icons/Error';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px',
      backgroundColor: 'rgb(240, 11, 11, 0.95)'
    },
    header: {
      height: '15%',
      margin: '10px',
      padding: '5px'
    },
    media: {
      margin: '5%'
    },
    error: {
      fontSize: '232%'
    },
    chip: {
      width: '90%',
      color: 'white',
      backgroundColor: '#777777',
      fontSize: '110%'
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

const ErrorExchange = () => {
    const classes = useStyles();
    const {setCurrentExchangingId} = useContext(AppContext);

    useEffect(() => {
      getUser();
    })

    return(
        <Card className={classes.root}>
            <CardHeader className={classes.header}/>
            <CardMedia className={classes.media}>
                <Typography variant="h4" align="center"> 
                    <ErrorIcon className={classes.error}/>
                </Typography>
                <Typography variant="h6">
                    Ocurrió un error al procesar el canje
                </Typography>
            </CardMedia>
            <Divider variant="middle" />
            <CardContent>
              <Chip 
                  className={classes.chip}
                  label="Reintentar Canje" 
                  onClick={() => setCurrentExchangingId("")}
                  clickable 
                />
            </CardContent>
        </Card>
    )
}

export default ErrorExchange;