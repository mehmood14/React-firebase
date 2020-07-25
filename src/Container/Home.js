import React, { Component } from "react";
import fire from "../Config/fire";
import "./Home.css";
import Todo from "../Components/Todo";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>My Notes</h1>
          <Link to="/">
            <button className="btnlogout" onClick={this.logout}>
              Logout
            </button>
          </Link>
        </div>
        <div className="tododiv">
          <Todo />
        </div>
      </>
    );
  }
}

export default Home;
