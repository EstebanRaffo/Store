import React, {useContext} from 'react';
import { AppContext } from "./ContextProvider";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
    const classes = useStyles();
  
    const {dateFrom, setDateFrom} = useContext(AppContext);
    const {dateTo, setDateTo} = useContext(AppContext);

    const handleFrom = ({target: {value}}) => {
        setDateFrom(value); 
    }

    const handleTo = ({target: {value}}) => {
        setDateTo(value); 
    }

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Desde"
                type="date"
                value={dateFrom}
                onChange={handleFrom}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="date"
                label="Hasta"
                type="date"
                value={dateTo}
                onChange={handleTo}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}
