import React, {useEffect} from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import User from "../containers/User";
import { getUser } from "../actions/actions";

import ConfirmationDialog from "./AddPoints";


const Header = ({getUser}) => {

  useEffect(() => {
    getUser();
    console.count("Se ejecutó getUser()");
  });

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
      
      <ConfirmationDialog/>
      <User/>              
    </div>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(null, mapDispatchToProps)(Header);