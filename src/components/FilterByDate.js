import React, {useState, useContext} from 'react';
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
    const {dateRange, setDateRange} = useContext(AppContext);
    const [dateFrom, setDateFrom] = useState(dateRange[0]);
    const [dateTo, setDateTo] = useState(dateRange[1]);
    
    console.log("dateRange: ", dateRange)

    const handleFrom = ({target: {value}}) => {
        setDateFrom(value);
        const newDateRange = [dateFrom, dateTo];
        setDateRange(newDateRange); 
    }

    const handleTo = ({target: {value}}) => {
        setDateTo(value);
        const newDateRange = [dateFrom, dateTo];
        setDateRange(newDateRange); 
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
