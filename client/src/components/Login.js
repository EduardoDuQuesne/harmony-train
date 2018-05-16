import React, { Component } from 'react';
import LoginForm from './LoginForm';
import "../css/login.css";

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <h1 className="login-header">login</h1>
        <LoginForm login={this.props.login} />
        <p>{this.props.message}</p>
      </div>
    );
  }
}
export default Login;
