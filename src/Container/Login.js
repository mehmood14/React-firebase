import React, { Component } from "react";
import fire from "../Config/fire";
import "./Login.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateEmail = () => {
    // eslint-disable-next-line
    const em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return em.test(this.state.email);
  };

  login(e) {
    e.preventDefault();

    if (
      this.state.email !== "" &&
      this.state.email !== null &&
      this.state.email !== undefined
    ) {
      if (this.validateEmail(this.state.email)) {
        if (
          this.state.password !== "" &&
          this.state.password !== null &&
          this.state.password !== undefined
        ) {
          if (this.state.password.length >= 8) {
            fire
              .auth()
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then((u) => {})
              .catch((error) => {
                console.log(error);
              });
          } else {
            swal("Password must be 8 digits long");
          }
        } else {
          swal("Password not entered");
        }
      } else {
        swal("Invalid email format");
      }
    } else {
      swal("Email not entered");
    }
  }

  signup(e) {
    e.preventDefault();

    if (
      this.state.email !== "" &&
      this.state.email !== null &&
      this.state.email !== undefined
    ) {
      if (this.validateEmail(this.state.email)) {
        if (
          this.state.password !== "" &&
          this.state.password !== null &&
          this.state.password !== undefined
        ) {
          if (this.state.password.length >= 8) {
            fire
              .auth()
              .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
              )
              .then((u) => {})
              .then((u) => {
                swal({
                  title: "Good job!",
                  text: "You are registered",
                  icon: "success",
                  button: "OK",
                });
                console.log(u);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            swal("Password must be 8 digits long");
          }
        } else {
          swal("Password not entered");
        }
      } else {
        swal("Invalid email format");
      }
    } else {
      swal("Email not entered");
    }
  }
  render() {
    return (
      <div className="backgroundlogin">
        <form className="formlogin">
          <div className="fieldDiv">
            <label for="exampleInputEmail">Email</label>
            <input
              className="loginField"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </div>

          <div className="fieldDiv">
            <label for="exampleInputPassword1">Password</label>
            <input
              className="loginField"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className="btndiv">
            <Link to="/home">
              <button className="buttonLogin" onClick={this.login}>
                Login
              </button>
            </Link>
            <p>OR</p>
            <Link to="/home">
              <button className="buttonLogin" onClick={this.signup}>
                Signup
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
