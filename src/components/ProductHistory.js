import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Moment from "moment";
import "moment/locale/es";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      margin: '5%',
      borderRadius: '10px'
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
        <Typography variant="subtitle2" color="textSecondary">
          {category}
        </Typography>
        <Typography variant="body2" component="span" display="block">
          {price} puntos
        </Typography>
        <Typography variant="subtitle2" color="secondary">
            {`Canjeado el ${Moment(date).format("DD/MM/YYYY")} a las ${Moment(date).format("LT")} hs`}
        </Typography> 
      </CardContent>
    </Card>
  );
};

export default Product;
