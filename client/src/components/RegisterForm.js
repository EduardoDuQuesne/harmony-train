import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterForm extends Component {
  username = React.createRef();
  password = React.createRef();
  email = React.createRef();
  confirmamtion = React.createRef();

  handleClick = () => {
    let newUser = {
      username: this.username.input.value,
      email: this.email.input.value,
      password: this.password.input.value,
      confirmation: this.confirm.input.value,
    };
    this.props.register(newUser);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            ref={input => {
              this.username = input;
            }}
            hintText=""
            floatingLabelText="Username"
            name="username"
          />
          <TextField
            ref={input => {
              this.email = input;
            }}
            hintText=""
            floatingLabelText="Email"
            name="email"
          />
          <TextField
            ref={input => {
              this.password = input;
            }}
            hintText=""
            floatingLabelText="Password"
            name="password"
            type="password"
          />
          <TextField
            ref={input => {
              this.confirm = input;
            }}
            hintText=""
            floatingLabelText="Confirm Password"
            name="confirm"
            type="password"
          />
          <RaisedButton label="Register" onClick={this.handleClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default RegisterForm;
