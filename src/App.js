import React, { Component } from "react";
import "./App.css";
import fire from "./Config/fire";
import Login from "./Container/Login";
import Home from "./Container/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authlistner();
  }

  authlistner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <>
        <div className="homewrap">
          {this.state.user ? (
            <Router>
              <Route path="/" component={Home} />
            </Router>
          ) : (
            <Router>
              <Route exact path="/" component={Login} />
            </Router>
          )}
        </div>
      </>
    );
  }
}
