import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Filters from "./Filters";
import Sorter from "./Sorter";
import Home from "./Home";
import AddPoints from "./AddPoints";



const Main = () => {
  return (
    <>
        <Header/>
        <AddPoints/>

        <Banner/>
        <Filters/>
        <Sorter/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </>
  );
};

export default Main;
