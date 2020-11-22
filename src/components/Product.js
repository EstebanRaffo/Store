import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import IconBuy from "./IconBuy";
import LackPoints from "./LackPoints";



const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
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

const Product = ({ productId, name, enabledPoints, price, photo, category }) => {
  const classes = useStyles();

  const sufficientBalance = () => {
    return enabledPoints >= price;
  }


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <IconButton aria-label="add to favorites">
            {sufficientBalance ? <IconBuy productId={productId} /> : <LackPoints delta={price - enabledPoints} />}
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
        <Typography variant="subtitle2" color="primary">
          {category}
        </Typography>
        <Typography variant="body2" component="span" display="block">
          {name} | Puntos: {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
