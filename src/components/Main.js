import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Filters from "./Filters";
import Sorter from "./Sorter";
import Home from "./Home";
import History from "./History";


const Main = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Filters/>
      <Sorter/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/history" component={History} />
      </Switch>
    </div>
  );
};

export default Main;
