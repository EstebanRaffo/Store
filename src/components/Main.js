import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "../containers/Search";
import Menu from "./Menu";
import Home from "./Home";
import NewsBySearch from "./NewsBySearch";

const Main = () => {
  return (
    <div>
      <Search />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:searchTerm" component={NewsBySearch} />
      </Switch>
    </div>
  );
};

export default Main;
