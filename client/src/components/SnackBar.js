import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

class SnackBar extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Snackbar
              open={this.props.open}
              message={`${this.props.message}`}
              autoHideDuration={4000}
              onRequestClose={this.props.closeSnackBar}
            />
        </MuiThemeProvider>
    );
  }
}
export default SnackBar;