import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import '../css/selectTempo.css';

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
          className="select-tempo"
          floatingLabelText="tempo"
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelStyle={{color: 'white'}}
          selectedMenuItemStyle={{color: '#8F754F'}}
          labelStyle={{color: 'white'}}
          >
            <MenuItem value={60} primaryText="slowest" />
            <MenuItem value={80} primaryText="slow" />
            <MenuItem value={120} primaryText="medium" />
            <MenuItem value={160} primaryText="fast" />
            <MenuItem value={200} primaryText="fastest" />
          </SelectField>
      </MuiThemeProvider>
    );
  }
}

export default SelectTempo;