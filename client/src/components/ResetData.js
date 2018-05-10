import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ResetData extends Component {
  state = {
    open: false
  }
  handleOpen = () => {
    this.setState({
      open: true
    });
  }
  handleClose = () => {
    this.setState({
      open: false
    });
  }
  handleResetData = () => {
    this.setState({
      open: false
    });
    this.props.resetData();
  }
  
  
  render() {
    const actions = [
      <FlatButton
      label="No"
      primary={true}
      onClick={this.handleClose}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        onClick={this.handleResetData}
      />,
    ];

    return (

      <MuiThemeProvider>
        <div>
          <RaisedButton onClick={this.handleOpen} label="Reset Data"  />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            Are you sure you would like to reset data?
            </Dialog>

        </div>
      </MuiThemeProvider>
    );
  }
}
export default ResetData;