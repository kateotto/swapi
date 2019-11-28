import React, { Component } from "react";
import "./App.scss";
import ListComponent from "./ListComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditComponent from "./EditComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ListComponent} />
        <Route path="/edit" component={EditComponent} />
      </Router>
    );
  }
}

export default App;
