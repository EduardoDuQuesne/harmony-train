import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm login={this.props.login} />
      </div>
    );
  }
}
export default Login;
