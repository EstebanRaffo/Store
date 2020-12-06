import React, {useState, useContext} from 'react';
import { AppContext } from "./ContextProvider";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Sorter = () => {
  const classes = useStyles();
  const {sort, setSort} = useContext(AppContext)
  const [open, setOpen] = useState(false);

  const handleChange = ({target: {value}}) => {
    setSort(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Ordenar Por
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Precio</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value={0}>
            <em>Ninguno</em>
          </MenuItem>
          <MenuItem value={10}>Menor Precio</MenuItem>
          <MenuItem value={20}>Mayor Precio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sorter;
