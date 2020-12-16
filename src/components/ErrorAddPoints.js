import React from "react";
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    error: {
      fontSize: '180%',
      color: '#d50000'
    }
}));


const ErrorAddPoints = () => {
    const classes = useStyles();
    
    return(
        <div className="error-user">
            <ErrorIcon className={classes.error}/>
            <h5>Error al cargar puntos</h5>
        </div>
    )
}

export default ErrorAddPoints;