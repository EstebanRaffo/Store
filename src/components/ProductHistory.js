import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography, Divider} from '@material-ui/core';

import Moment from "moment";
import "moment/locale/es";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px'
    },
    media: {
      paddingTop: '56.25%',
      borderRadius: '10px',
      margin: '5%'
    },
    category: {
      color: 'rgb(19, 113, 175)',
      fontFamily: 'Lucida Console'
    },
    price: {
      color: 'rgb(0, 160, 107)',
      fontWeight: 'bold'
    },
    date: {
      fontFamily: 'Vendana, Helvetica, sans-serif',
      fontStyle: 'italic'
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

const Product = ({ name, date, price, photo, category }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="span" display="block">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={photo}
        title={name}
      />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body1" className={classes.category}>
          {category}
        </Typography>
        <Typography variant="subtitle1" className={classes.price}>
          {price} puntos
        </Typography>
        <Typography variant="subtitle1" className={classes.date}>
            {`Canjeado el ${Moment(date).format("DD/MM/YYYY")} a las ${Moment(date).format("LT")} hs`}
        </Typography> 
      </CardContent>
    </Card>
  );
};

export default Product;
