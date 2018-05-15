import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectTempo extends Component {
  state = {
    value: 120,
  };

  handleChange = (event, index, value) => { 
    this.setState({value});
    this.props.changeTempo(value);
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <SelectField
            floatingLabelText="Tempo"
            value={this.state.value}
            onChange={this.handleChange}
         
          >
            <MenuItem value={60} primaryText="Slowest" />
            <MenuItem value={80} primaryText="Slow" />
            <MenuItem value={120} primaryText="Medium" />
            <MenuItem value={160} primaryText="Fast" />
            <MenuItem value={200} primaryText="Fastest" />
          </SelectField>
      </MuiThemeProvider>
    );
  }
}

export default SelectTempo;