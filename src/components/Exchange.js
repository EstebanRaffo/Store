import React from "react";
import IconExchange from "./IconExchange";
import { exchange, getUser } from "../actions/actions";
import {useDispatch} from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Coin from "./Coin";
import Chip from '@material-ui/core/Chip';


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

const Exchange = ({productId, name, price, category}) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleClick = () => {
        console.info('You clicked Comprar.');
        dispatch(exchange(productId));
        dispatch(getUser());
    };


    return(
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <IconButton aria-label="add to favorites">
                    <IconExchange/>
                </IconButton>
                }
            />
            <CardMedia className={classes.media}>
                <Typography variant="h4" align="center">
                    {price} 
                    <Coin/>
                </Typography>
                <Chip label="Canjear" onClick={handleClick} clickable />
            </CardMedia>
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="subtitle2" color="primary">
                    {category}
                </Typography>
                <Typography variant="body2" component="span" display="block">
                    {name} 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Exchange;