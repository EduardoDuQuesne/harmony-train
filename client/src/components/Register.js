import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import '../css/register.css'

class Register extends Component {


  render() {
    return (
        <div className="register-container">
          <h1 className="register-header">register</h1>
          <RegisterForm register={this.props.register} />
          <p>{this.props.message}</p>
        </div>
    );
  }
}
export default Register;
