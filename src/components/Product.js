import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import IconBuy from "./IconBuy";
import LackPoints from "./LackPoints";



const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
    },
    header: {
      height: '15%',
      margin: '10px',
      padding: '5px'
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

const Product = ({ productId, name, enabledPoints, price, photo, category }) => {
  const classes = useStyles();

  const sufficientBalance = () => {
    return enabledPoints >= price;
  }


  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        action={
          <IconButton aria-label="add to favorites">
            {sufficientBalance() ? <IconBuy productId={productId} /> : <LackPoints delta={price - enabledPoints} />}
          </IconButton>
        }
      />
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
        <Typography variant="h6">
          {name} 
        </Typography>
        <Typography variant="subtitle1" className={classes.price}>
          {price} puntos
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
