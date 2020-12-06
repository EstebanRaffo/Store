import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';

import LoadingExchange from "./LoadingExchange";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px',
      backgroundColor: 'rgb(15, 173, 236, 0.705)'
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
    avatar: {
      backgroundColor: red[500],
    },
}));

const Exchanging = () => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media}>
                <Typography variant="h4" align="center">
                    <LoadingExchange />
                </Typography>
            </CardMedia>
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="body2" component="span" display="block">
                    {"Canjeando"} 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Exchanging;