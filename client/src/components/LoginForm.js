import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/loginForm.css';

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

        <MuiThemeProvider className="login-container">
          <form className="login-form">
            <div>
              <TextField
                ref={input => {
                  this.userName = input;
                }}
                hintText=""
                floatingLabelText="Username"
                name="username"
              />
            </div>
            <div>
              <TextField
                ref={input => {
                  this.userPassword = input;
                }}
                hintText=""
                floatingLabelText="Password"
                name="password"
                type="password"
              />
            </div>
            <div>    
              <RaisedButton label="Login" onClick={this.handleClick} />
            </div>    
          </form>
        </MuiThemeProvider>
    );
  }
}
export default LoginForm;
