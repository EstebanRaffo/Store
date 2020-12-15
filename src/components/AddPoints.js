import React, { useState, useRef, useEffect } from 'react';
import { addPoints } from "../actions/actions";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Button, DialogTitle, DialogContent, DialogActions, Dialog, RadioGroup, Radio, FormControlLabel} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

import Coin from "./Coin";
import NewChip from "./NewChip";


const options = [
  '1000',
  '5000',
  '7500'
];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setPoints] = useState(valueProp);
  const radioGroupRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!open) {
      setPoints(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
    dispatch(addPoints(+value));
  };

  const handleChange = ({target: {value}}) => {
    if(options.indexOf(value) > -1){
      setPoints(value);
    }
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">¿Cuántos puntos sumamos?</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="contained" color="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={handleOk}>
          Sumar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
  coin: {
    width: "25%",
  }
}));



export default function ConfirmationDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setPoints] = useState('1000');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setPoints(newValue);
    }
  };

  const handleDelete = () => {
    return
  }

  return (
    <div className={classes.root}>
        <NewChip
          icon={<AddIcon />}
          label="Sumá Puntos"
          clickable
          onClick={() => handleClickListItem()}
          onDelete={() => handleDelete()}
          deleteIcon={<Coin />}
        />
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
    </div>
  );
}
