import React from "react";
import IconExchange from "./IconExchange";
import Redeem from "./Redeem";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      backgroundColor: 'rgb(15, 173, 236, 0.7)',
      position: 'relative'
    },
    header: {
      height: '15%',
      margin: '10px',
      padding: '5px'
    },
    media: {
      paddingTop: '56.25%',
      borderRadius: '10px',
      margin: '5%',
      opacity: '0.3'
    },
    category: {
      color: '#585858',
      fontFamily: 'Lucida Console'
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

const Exchange = ({productId, name, price, category, photo}) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                action={
                  <IconButton aria-label="add to favorites">
                      <IconExchange/>
                  </IconButton>
                }
            />
            <Redeem productId={productId} price={price}/>
            <CardMedia 
              className={classes.media} 
              image={photo}
            />
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="body1" className={classes.category}>
                  {category}
                </Typography>
                <Typography variant="h6">
                  {name} 
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {price} puntos
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Exchange;