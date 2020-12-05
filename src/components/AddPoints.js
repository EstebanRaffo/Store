import React, {useState, useRef, useEffect} from 'react';
import { addPoints, getUser } from "../actions/actions";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";


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
    dispatch(getUser());
  };

  const handleChange = ({target: {value}}) => {
    setPoints(value);
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
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleOk} color="primary">
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

  return (
    <div className={classes.root}>
        <Chip
            avatar={
              <Avatar>
                  <AddIcon />
              </Avatar>
            }
            label="SUMA PUNTOS"
            onClick={() => handleClickListItem()}
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
