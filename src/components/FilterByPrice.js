import React, {useState, useContext} from 'react';
import { AppContext } from "./ContextProvider";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const {priceRange, setPriceRange} = useContext(AppContext);
  const [value, setValue] = useState(priceRange);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPriceRange(newValue)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Puntos
      </Typography>
      <Slider
        min={50}
        max={2500}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

