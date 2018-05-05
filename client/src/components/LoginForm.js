import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends Component {
  userName = React.createRef();
  userPassword = React.createRef();

  handleClick = () => {
    let user = {
      username: this.userName.input.value,
      password: this.userPassword.input.value,
    };
    this.props.login(user);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            ref={input => {
              this.userName = input;
            }}
            hintText=""
            floatingLabelText="Username"
            name="username"
          />

          <TextField
            ref={input => {
              this.userPassword = input;
            }}
            hintText=""
            floatingLabelText="Password"
            name="password"
            type="password"
          />

          <RaisedButton label="Login" onClick={this.handleClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default LoginForm;
