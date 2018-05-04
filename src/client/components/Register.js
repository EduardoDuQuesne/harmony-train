import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <RegisterForm register={this.props.register} />
        <p>{this.props.message}</p>
      </div>
    );
  }
}
export default Login;