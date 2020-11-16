import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import History from "./History";
import User from "../containers/User";
import { getUser } from "../actions/actions";

import ButtonAddPoints from "./ButtonAddPoints";

const Header = ({getUser}) => {

  React.useEffect(() => {
    console.count("Se ejecutó getUser()");
    getUser();
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
      <Switch>
        <Route path="/user/history" component={History} />
      </Switch>
      
      <ButtonAddPoints/>
      <User/>              
    </div>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(null, mapDispatchToProps)(Header);