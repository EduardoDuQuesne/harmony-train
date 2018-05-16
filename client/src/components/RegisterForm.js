import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/registerForm.css';

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
        <div className="register-form">
          <div>
            <TextField
              ref={input => {
                this.username = input;
              }}
              hintText=""
              floatingLabelText="Username"
              name="username"
              underlineFocusStyle={{borderColor: '#EFBC9B'}}
              floatingLabelStyle={{color: '#EFBC9B'}}
              inputStyle={{color: '#F5F0F6'}}
            />
          </div>
          <div>
            <TextField
              ref={input => {
                this.email = input;
              }}
              hintText=""
              floatingLabelText="Email"
              name="email"
              underlineFocusStyle={{borderColor: '#EFBC9B'}}
              floatingLabelStyle={{color: '#EFBC9B'}}
              inputStyle={{color: '#F5F0F6'}}
            />
          </div>
          <div>
            <TextField
              ref={input => {
                this.password = input;
              }}
              hintText=""
              floatingLabelText="Password"
              name="password"
              type="password"
              underlineFocusStyle={{borderColor: '#EFBC9B'}}
              floatingLabelStyle={{color: '#EFBC9B'}}
              inputStyle={{color: '#F5F0F6'}}
            />
          </div>
          <div>
            <TextField
              ref={input => {
                this.confirm = input;
              }}
              hintText=""
              floatingLabelText="Confirm Password"
              name="confirm"
              type="password"
              underlineFocusStyle={{borderColor: '#EFBC9B'}}
              floatingLabelStyle={{color: '#EFBC9B'}}
              inputStyle={{color: '#F5F0F6'}}
            />
          </div>
          <div className="register-btn-container">
            <RaisedButton label="Register" onClick={this.handleClick} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default RegisterForm;
