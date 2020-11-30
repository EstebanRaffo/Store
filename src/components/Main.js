import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Filters from "./Filters";
import Home from "./Home";
import History from "./History";


const Main = () => (
  <>
    <Header/>
    <Banner/>
    <Filters/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/history" component={History} />
    </Switch>
  </>
);


export default Main;
