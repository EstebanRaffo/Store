import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Filters from "./Filters";
import Home from "./Home";



const Main = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <Filters/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </>
  );
};

export default Main;
