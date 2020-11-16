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
import FavoriteIcon from '@material-ui/icons/Favorite';

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

const Product = ({ name, price, photo, category }) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={photo}
        title="Paella dish"
      />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="subtitle2">
          {category}
        </Typography>
        <Typography variant="body2" color="primary" component="span" display="block">
          {name} | $ {price}
        </Typography>
      </CardContent>
    </Card>
    );
};

export default Product;
