import React, {useState, useContext} from 'react';
import { AppContext } from "./ContextProvider";
import {makeStyles, Typography, Slider, InputAdornment, TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Coin from "./Coin";

const MIN_VALUE = 50;
const MAX_VALUE = 2500;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
  margin: {
    width: "45%",
  },
  coin: {
    width: "25%",
  }
}));

function valuetext(value) {
  return `${value}°C`;
}


const PrettoSlider = withStyles({
  root: {
    color: '#007bff',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export default function RangeSlider() {
  const classes = useStyles();
  const {priceRange, setPriceRange} = useContext(AppContext);
  const [value, setValue] = useState(priceRange);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPriceRange(newValue);
  };

  const handleMin = ({target: {value: min}}) => {
    const newValue = [min, value[1]];
    if(min <= value[1] && min >= MIN_VALUE){
      setValue(newValue);
      setPriceRange(newValue);
    }
  }

  const handleMax = ({target: {value: max}}) => {
    const newValue = [value[0], max];
    if(max >= value[0] && max <= MAX_VALUE){
      setValue(newValue);
      setPriceRange(newValue);
    }
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" >
        Puntos
      </Typography>
      <PrettoSlider
        className={classes.rail}
        min={MIN_VALUE}
        max={MAX_VALUE}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Desde"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={classes.coin}>
              <Coin />
            </InputAdornment>
          )
        }}
        value={value[0]}
        onChange={handleMin}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Hasta"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={classes.coin}>
              <Coin />
            </InputAdornment>
          )
        }}
        value={value[1]}
        onChange={handleMax}
      />
    </div>
  );
}