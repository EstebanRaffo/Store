import React, {useContext} from "react";
import { Link } from "react-router-dom";
import User from "../containers/User";
import AddPoints from "./AddPoints";

import { Switch, FormControlLabel } from "@material-ui/core";
import {CustomThemeContext} from "../themes/CustomThemeProvider";



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
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-item">
        <Link to="/user/history">
          Canjes
        </Link>
      </div>
      <AddPoints/>
      <User/>              
      <FormControlLabel
        control={
          <Switch
          onChange={handleThemeChange}
          name="checkedA"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label="Theme"
        labelPlacement='top'
      />  
    </div>
  );
};

export default Header;