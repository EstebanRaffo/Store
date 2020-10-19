import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import History from "./History";
import User from "../containers/User";
import { getUser } from "../actions/actions";

const Header = ({getUser}) => {
  getUser();
  return (
    <div className="Header">
      <h1>Header</h1>
      <nav className="navbar">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/user/history">
            History
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path="/user/history" component={History} />
      </Switch>

      <User/>
    </div>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(null, mapDispatchToProps)(Header);