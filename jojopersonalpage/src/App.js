import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { matchPath } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { AboutMe } from "./components/AboutMe";
import { Resume } from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route
            path="/linkedin"
            component={() => {
              window.open ("https://www.linkedin.com/in/jonelle-bain/","mywindow","status=1");
              return null;
            }}
          />
          <Route
            path="/github"
            component={() => {
              window.open ("https://github.com/jbain424/","mywindow","status=1");
              return null;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
