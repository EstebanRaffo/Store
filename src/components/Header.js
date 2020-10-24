import React, { useContext } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import History from "./History";
import User from "../containers/User";
import { getUser } from "../actions/actions";

import { AppContext } from "./ContextProvider";


const Header = ({getUser}) => {
  const { show, setShow } = useContext(AppContext);

  getUser();
  return (
    <div className="header">

      <h3>Header</h3>
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

      <button className="action" onClick={() => setShow(!show)}>
         Add Points
      </button>
      <User/>
                    
    </div>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(null, mapDispatchToProps)(Header);