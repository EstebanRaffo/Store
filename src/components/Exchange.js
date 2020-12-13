import React, {useContext} from "react";
import IconExchange from "./IconExchange";
import { exchange } from "../actions/actions";
import {useDispatch} from "react-redux";
import { AppContext } from "../components/ContextProvider";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Coin from "./Coin";
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '23%',
      margin: '10px',
      padding: '5px',
      backgroundColor: 'rgb(15, 173, 236, 0.7)'
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
    const dispatch = useDispatch();
    const {setCurrentId, setCurrentExchangingId} = useContext(AppContext);

    const handleClick = () => {
        dispatch(exchange(productId));
        setCurrentId("");
        setCurrentExchangingId(productId);
    };


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
            <CardMedia 
              className={classes.media} 
              image={photo}
            />
            <Divider variant="middle" />
            <CardContent>
                {/* <Typography variant="subtitle2" color="primary">
                    {category}
                </Typography>
                <Typography variant="body2" component="span" display="block">
                    {name} 
                </Typography> */}
                <Typography variant="h4" align="center">
                    {price} 
                    <Coin/>
                </Typography>
                <Chip 
                  label="Canjear" 
                  onClick={handleClick}
                  clickable 
                />
            </CardContent>
        </Card>
    )
}

export default Exchange;