import React, { Component } from "react";
import { GoMarkGithub } from "react-icons/go";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <a href="https://github.com/mehmood14/React-firebase">
          <GoMarkGithub className="git" />
        </a>
      </div>
    );
  }
}
