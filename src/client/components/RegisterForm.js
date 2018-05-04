import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class RegisterForm extends Component {
  firstName = React.createRef();
  lastName = React.createRef(); 
  userName = React.createRef(); 
  password = React.createRef();
  confirm = React.createRef();

  handleClick = () => {
    let newUser = {
      "firstName": this.firstName.input.value,
      "lastName": this.lastName.input.value,
      "userName": this.username.input.value,
      "password": this.password.input.value,
      "confirm": this.confirm.input.value
    }
    this.props.register(newUser);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            ref={(input) =>{this.firstName = input}}
            hintText=""
            floatingLabelText="First Name"
            name="first_name"
          />
          <TextField
            ref={(input) =>{this.lastName = input}}
            hintText=""
            floatingLabelText="Last Name"
            name="last_name"
          />
          <TextField
            ref={(input) =>{this.username = input}}
            hintText=""
            floatingLabelText="Username"
            name="username"
          />
          <TextField
            ref={(input) =>{this.password = input}}
          hintText="" 
          floatingLabelText="Email" 
          name="email" 
          />
          <TextField
            ref={(input) =>{this.password = input}}
            hintText=""
            floatingLabelText="Password"
            name="password"
            type="password"
          />
          <TextField
            ref={(input) =>{this.confirm = input}}
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
