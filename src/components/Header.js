import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions/actions";
import User from "../containers/User";
import AddPoints from "./AddPoints";

import { Switch } from "@material-ui/core";
import {CustomThemeContext} from "../themes/CustomThemeProvider";

const Header = ({getUser}) => {

  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  useEffect(() => {
    getUser();
    console.count("Se ejecutó getUser()");
  });

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
          Historial
        </Link>
      </div>
      <AddPoints/>
      <Switch
        onChange={handleThemeChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <User/>              
    </div>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(null, mapDispatchToProps)(Header);