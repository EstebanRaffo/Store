import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import LoadingExchange from "./LoadingExchange";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px',
      backgroundColor: 'rgb(15, 173, 236, 0.705)'
    },
    header: {
      height: '15%',
      margin: '10px',
      padding: '5px'
    },
    media: {
      margin: '5%'
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

const Exchanging = () => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader className={classes.header} />
            <CardMedia className={classes.media}>
                <LoadingExchange />
            </CardMedia>
            <CardContent>
              <Typography variant="h6">
                Canjeando 
              </Typography>
            </CardContent>
        </Card>
    )
}

export default Exchanging;