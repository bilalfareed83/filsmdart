import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import WhatWeDo from "./WhatWeDo";

const RouterComponent = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <WhatWeDo />
    </Router>
  );
};

export default RouterComponent;
