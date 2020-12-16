import React, {useContext} from "react";
import { Link } from "react-router-dom";
import User from "../containers/User";
import AddPoints from "./AddPoints";

import { Switch, FormControlLabel } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {CustomThemeContext} from "../themes/CustomThemeProvider";


const ThemeSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#007bff',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[49],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Header = () => {
  const { setTheme } = useContext(CustomThemeContext);

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div className="header">
      <div className="navbar-item">
        <Link to="/Store">Home</Link>
      </div>
      <div className="navbar-item">
        <Link to="/Store/user/history">
          Canjes
        </Link>
      </div>
      <AddPoints/>
      <User/>              
      <FormControlLabel
        control={
          <ThemeSwitch
            onChange={handleThemeChange}
            name="checkedA"
          />
        }
        label="Theme"
        labelPlacement='top'
      />  
    </div>
  );
};

export default Header;