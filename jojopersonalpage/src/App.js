import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { AboutMe } from "./components/AboutMe";
import {Resume} from "./components/Resume"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default App;
